export type LeadStatus = 'new'|'in_progress'|'proposal_sent'|'won'|'lost';
export type LeadPayload = Record<string,string> & {name:string;phone:string;destination:string;status?:LeadStatus;createdAt?:string};
export function validateLead(body:any){
  const required=['destination','travelers','style','budget','timing','priority','name','phone','messenger'];
  const missing=required.filter((k)=>!body?.[k]);
  return {ok: missing.length===0, missing};
}
