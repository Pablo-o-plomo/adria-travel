import { NextResponse } from 'next/server';
import { validateLead } from '@/lib/validation';
import { sendLeadToTelegram } from '@/lib/telegram';
import { sendLeadEmail } from '@/lib/email';

export async function POST(req: Request) {
  const body = await req.json();
  const v = validateLead(body);
  if (!v.ok) return NextResponse.json({ success: false, errors: v.missing }, { status: 400 });
  const lead = { ...body, status: body.status || 'new', createdAt: body.createdAt || new Date().toISOString() };
  console.log('Lead', lead);
  await Promise.allSettled([sendLeadToTelegram(lead), sendLeadEmail(lead)]);
  return NextResponse.json({ success: true, lead });
}
