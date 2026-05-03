'use client';
import { useEffect, useState } from 'react';

type Lead = {name:string;phone:string;destination:string;budget?:string;timing?:string;createdAt:string};
export default function Admin(){
  const [auth,setAuth]=useState(false); const [pwd,setPwd]=useState(''); const [leads,setLeads]=useState<Lead[]>([]);
  const [offers,setOffers]=useState<string[]>(['Family Sea Vacation','Gastro Tour','Yacht Weekend']);
  useEffect(()=>{setLeads(JSON.parse(localStorage.getItem('adria_leads')||'[]')); setOffers(JSON.parse(localStorage.getItem('adria_offers')||JSON.stringify(offers)));},[]);
  const login=()=>{ if(pwd===(process.env.NEXT_PUBLIC_ADMIN_PASSWORD||'admin123')) setAuth(true); };
  const saveOffers=(v:string[])=>{setOffers(v); localStorage.setItem('adria_offers',JSON.stringify(v));};
  if(!auth) return <div className='max-w-md mx-auto bg-white p-6 rounded-2xl'><h1 className='text-3xl mb-3'>Вход администратора</h1><input className='border p-2 rounded w-full' type='password' placeholder='Пароль' onChange={e=>setPwd(e.target.value)}/><button className='mt-3 bg-slate-900 text-white px-4 py-2 rounded' onClick={login}>Войти</button></div>
  return <div className='space-y-8'><h1 className='text-3xl font-semibold'>Админ-панель заявок</h1><section><h2 className='text-xl mb-2'>Заявки ({leads.length})</h2><div className='grid gap-2'>{leads.map((l,idx)=><div key={idx} className='bg-white p-3 rounded border'>{l.name} · {l.phone} · {l.destination} · {l.createdAt}</div>)}</div></section><section><h2 className='text-xl mb-2'>Редактор предложений</h2>{offers.map((o,idx)=><input key={idx} className='border p-2 rounded w-full mb-2' value={o} onChange={e=>saveOffers(offers.map((x,i)=>i===idx?e.target.value:x))}/>)}<button className='bg-cyan-600 text-white px-3 py-2 rounded' onClick={()=>saveOffers([...offers,'Новое предложение'])}>Добавить предложение</button></section></div>
}
