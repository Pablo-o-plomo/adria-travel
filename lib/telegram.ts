import { LeadPayload } from './validation';
export async function sendLeadToTelegram(lead: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN; const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  const text = `Новая заявка Adria Travel\n${lead.name} | ${lead.phone}\n${lead.destination}, ${lead.budget}, ${lead.timing}`;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chatId,text})});
}
