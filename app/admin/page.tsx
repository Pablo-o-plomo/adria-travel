'use client';
import { useEffect, useState } from 'react';

type Lead = {name:string;phone:string;destination:string;budget?:string;timing?:string;createdAt:string;status:'new'|'in_progress'|'proposal_sent'|'won'|'lost'};
type TourDraft = {title:string;country:string;format:string;priceFrom:string;duration:string;description:string;image:string};

const emptyTour: TourDraft = {title:'',country:'',format:'',priceFrom:'',duration:'',description:'',image:''};

export default function Admin(){
  const [auth,setAuth]=useState(false); const [pwd,setPwd]=useState('');
  const [leads,setLeads]=useState<Lead[]>([]); const [tour,setTour]=useState<TourDraft>(emptyTour); const [saved,setSaved]=useState<TourDraft[]>([]);
  useEffect(()=>{setLeads(JSON.parse(localStorage.getItem('adria_leads')||'[]')); setSaved(JSON.parse(localStorage.getItem('adria_custom_tours')||'[]'));},[]);
  const login=()=>{ if(pwd===(process.env.NEXT_PUBLIC_ADMIN_PASSWORD||'admin123')) setAuth(true); };
  const setLeadStatus=(idx:number,status:Lead['status'])=>{const next=[...leads]; next[idx]={...next[idx],status}; setLeads(next); localStorage.setItem('adria_leads',JSON.stringify(next));};
  const onImage=(f?:File)=>{ if(!f) return; const r=new FileReader(); r.onload=()=>setTour({...tour,image:String(r.result)}); r.readAsDataURL(f); };
  const addTour=()=>{ if(!tour.title) return; const next=[tour,...saved]; setSaved(next); localStorage.setItem('adria_custom_tours',JSON.stringify(next)); setTour(emptyTour); };
  if(!auth) return <div className='max-w-md mx-auto bg-white p-6 rounded-2xl'><h1 className='text-3xl mb-3'>Вход администратора</h1><input className='border p-2 rounded w-full' type='password' placeholder='Пароль' onChange={e=>setPwd(e.target.value)}/><button className='mt-3 bg-slate-900 text-white px-4 py-2 rounded' onClick={login}>Войти</button></div>
  return <div className='space-y-10'>
    <h1 className='text-3xl font-semibold'>Внутренняя CRM: заявки и туры</h1>
    <section><h2 className='text-xl mb-2'>Заявки ({leads.length})</h2><div className='grid gap-3'>{leads.map((l,idx)=><div key={idx} className='bg-white p-3 rounded border'><div>{l.name} · {l.phone} · {l.destination}</div><div className='text-sm text-slate-500'>{l.createdAt}</div><select className='mt-2 border p-2 rounded' value={l.status||'new'} onChange={e=>setLeadStatus(idx,e.target.value as Lead['status'])}><option value='new'>Новая</option><option value='in_progress'>В работе</option><option value='proposal_sent'>Отправили предложение</option><option value='won'>Успешно</option><option value='lost'>Закрыта без сделки</option></select></div>)}</div></section>
    <section><h2 className='text-xl mb-3'>Редактор тура (шаблон)</h2><div className='grid md:grid-cols-2 gap-3 bg-white p-4 rounded-xl border'>
      <input className='border p-2 rounded' placeholder='Название тура' value={tour.title} onChange={e=>setTour({...tour,title:e.target.value})}/>
      <input className='border p-2 rounded' placeholder='Страна' value={tour.country} onChange={e=>setTour({...tour,country:e.target.value})}/>
      <input className='border p-2 rounded' placeholder='Формат (семейный/яхта...)' value={tour.format} onChange={e=>setTour({...tour,format:e.target.value})}/>
      <input className='border p-2 rounded' placeholder='Цена от' value={tour.priceFrom} onChange={e=>setTour({...tour,priceFrom:e.target.value})}/>
      <input className='border p-2 rounded' placeholder='Длительность' value={tour.duration} onChange={e=>setTour({...tour,duration:e.target.value})}/>
      <input className='border p-2 rounded' type='file' accept='image/*' onChange={e=>onImage(e.target.files?.[0])}/>
      <textarea className='border p-2 rounded md:col-span-2' placeholder='Описание тура' value={tour.description} onChange={e=>setTour({...tour,description:e.target.value})}/>
      <button className='bg-cyan-600 text-white px-4 py-2 rounded w-fit' onClick={addTour}>Сохранить тур</button>
    </div>
    <div className='grid md:grid-cols-3 gap-3 mt-3'>{saved.map((t,idx)=><div key={idx} className='bg-white rounded-xl border overflow-hidden'>{t.image&&<img src={t.image} className='h-36 w-full object-cover' alt={t.title}/>}<div className='p-3'><div className='font-semibold'>{t.title}</div><div className='text-sm text-slate-600'>{t.country} · {t.priceFrom}</div></div></div>)}</div></section>
  </div>
}
