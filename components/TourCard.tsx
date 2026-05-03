import Link from 'next/link'; import { Tour } from '@/lib/data';
export default function TourCard({tour}:{tour:Tour}){return <Link href={`/tours/${tour.slug}`} className='block p-5 rounded-2xl bg-white shadow'><h3 className='font-semibold'>{tour.title}</h3><p>{tour.priceFrom} · {tour.duration}</p></Link>}
