import Link from 'next/link'; import { Destination } from '@/lib/data';
export default function DestinationCard({d}:{d:Destination}){return <Link href={`/destinations/${d.slug}`} className='block p-5 rounded-2xl bg-white shadow'><h3 className='text-xl font-semibold'>{d.name}</h3><p className='text-slate-600 mt-2'>{d.teaser}</p></Link>}
