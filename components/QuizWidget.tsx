'use client';
import { useMemo, useState } from 'react';
import { pushDataLayer } from '@/lib/analytics';

const steps = [
  { key:'destination', title:'Куда хотите поехать?', options:['Италия','Черногория','Хорватия','Греция','Испания','Турция','Пока не знаю'] },
  { key:'travelers', title:'Кто едет?', options:['Один/одна','Пара','Семья с детьми','Компания друзей','Корпоратив / группа'] },
  { key:'style', title:'Какой стиль отдыха?', options:['Пляж и море','Красивые города','Гастро-путешествие','Яхты и острова','Premium/luxury','Активный отдых','Всё понемногу'] },
  { key:'budget', title:'Бюджет на поездку', options:['До 150 000 ₽','150 000–300 000 ₽','300 000–600 000 ₽','600 000 ₽+','Пока не понимаю'] },
  { key:'timing', title:'Когда планируете поездку?', options:['В ближайшие 2 недели','В течение месяца','Через 2–3 месяца','Летом','Осенью/зимой','Пока выбираю'] },
  { key:'priority', title:'Что важно?', options:['Отель у моря','Красивые виды','Хорошая еда','Детская инфраструктура','Тишина и приватность','Много впечатлений'] },
] as const;

export default function QuizWidget(){
  const [i,setI]=useState(0); const [answers,setAnswers]=useState<Record<string,string>>({});
  const [contact,setContact]=useState({name:'',phone:'',messenger:'',comment:''}); const [done,setDone]=useState(false);
  const progress = useMemo(()=> Math.round(((i+1)/7)*100),[i]);
  const step = steps[i];
  const pick = (v:string)=>{ setAnswers(a=>({...a,[step.key]:v})); pushDataLayer('quiz_step',{step:step.key,value:v}); setI((x)=>Math.min(x+1,6)); };
  const submit = async ()=>{pushDataLayer('lead_submit'); const payload={...answers,...contact,landing_page:location.pathname,referrer:document.referrer,createdAt:new Date().toISOString()}; const old=JSON.parse(localStorage.getItem('adria_leads')||'[]'); localStorage.setItem('adria_leads',JSON.stringify([payload,...old])); await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); setDone(true); pushDataLayer('quiz_complete');};
  if(done) return <div className='bg-white rounded-3xl p-6'><h3 className='text-2xl font-semibold'>Готово. Мы подберем 3 варианта отдыха под ваш запрос.</h3><p className='mt-2'>Ответим в Telegram или WhatsApp.</p></div>
  return <div className='bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl'>
    <p className='text-sm text-slate-500'>Квиз займет 2 минуты</p>
    <div className='h-2 bg-slate-200 rounded mt-2'><div className='h-2 bg-cyan-500 rounded' style={{width:`${progress}%`}}/></div>
    {i<6 ? <><h3 className='mt-4 text-xl font-semibold'>{step.title}</h3><div className='grid gap-2 mt-3'>{step.options.map(o=><button key={o} onClick={()=>pick(o)} className='text-left rounded-xl border p-3 hover:bg-cyan-50'>{o}</button>)}</div></> : <div className='grid gap-2 mt-4'><input className='border rounded p-2' placeholder='Имя' onChange={e=>setContact({...contact,name:e.target.value})}/><input className='border rounded p-2' placeholder='Телефон' onChange={e=>setContact({...contact,phone:e.target.value})}/><input className='border rounded p-2' placeholder='Telegram/WhatsApp' onChange={e=>setContact({...contact,messenger:e.target.value})}/><textarea className='border rounded p-2' placeholder='Комментарий' onChange={e=>setContact({...contact,comment:e.target.value})}/><button onClick={submit} className='bg-slate-900 text-white p-3 rounded-xl'>Получить подборку туров</button></div>}
  </div>
}
