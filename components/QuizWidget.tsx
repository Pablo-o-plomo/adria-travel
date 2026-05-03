'use client';
import { useState } from 'react';
const steps=['Куда хотите поехать?','Кто едет?','Какой стиль отдыха?','Бюджет на поездку','Когда планируете поездку?','Что важно?'];
export default function QuizWidget(){const [s,setS]=useState(0);return <div className='bg-white/70 backdrop-blur rounded-3xl p-6'><div className='h-2 bg-slate-200 rounded'><div className='h-2 bg-cyan-500 rounded' style={{width:`${((s+1)/7)*100}%`}}/></div><h3 className='mt-4 text-xl'>{steps[s]??'Контакты'}</h3><button className='mt-4 bg-slate-900 text-white px-4 py-2 rounded-full' onClick={()=>setS((v)=>Math.min(v+1,6))}>Далее</button></div>}
