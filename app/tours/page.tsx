import { tours } from '@/lib/data'; import TourCard from '@/components/TourCard';
export default function P(){return <div><h1 className='text-4xl mb-4'>Туры</h1><div className='grid md:grid-cols-2 gap-4'>{tours.map(t=><TourCard key={t.slug} tour={t}/>)}</div></div>}
