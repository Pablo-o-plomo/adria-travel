'use client';
import { useEffect, useState } from 'react';
import { tours, Tour } from '@/lib/data';
import TourCard from '@/components/TourCard';

export default function P(){
  const [custom,setCustom]=useState<Tour[]>([]);
  useEffect(()=>{setCustom(JSON.parse(localStorage.getItem('adria_custom_tours')||'[]'));},[]);
  const all=[...custom.map((t,i)=>({...t,slug:t.slug||`custom-${i}`} as Tour)),...tours];
  return <div><h1 className='text-4xl mb-4'>Туры</h1><div className='grid md:grid-cols-2 gap-4'>{all.map(t=><TourCard key={t.slug} tour={t}/>)}</div></div>
}
