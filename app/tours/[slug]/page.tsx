import { tours } from '@/lib/data'; import { notFound } from 'next/navigation';
export default function P({params}:{params:{slug:string}}){const t=tours.find(x=>x.slug===params.slug); if(!t) return notFound(); return <article><h1 className='text-4xl'>{t.title}</h1><p>{t.description}</p></article>}
