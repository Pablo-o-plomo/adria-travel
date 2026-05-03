import { LeadPayload } from './validation';
export async function sendLeadEmail(lead: LeadPayload) {
  const webhook = process.env.LEADS_EMAIL_WEBHOOK;
  if (!webhook) return;
  await fetch(webhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({subject:'Новая заявка Adria Travel',text:`${lead.name} ${lead.phone} ${lead.destination}`})});
}
