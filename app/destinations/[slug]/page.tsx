import { destinations } from '@/lib/data'; import { notFound } from 'next/navigation';
export default function P({params}:{params:{slug:string}}){const d=destinations.find(x=>x.slug===params.slug); if(!d) return notFound(); return <article><h1 className='text-4xl'>{d.name}</h1><p className='mt-3'>{d.teaser}</p></article>}
