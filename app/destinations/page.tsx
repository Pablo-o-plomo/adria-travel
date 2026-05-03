import { destinations } from '@/lib/data'; import DestinationCard from '@/components/DestinationCard';
export default function P(){return <div><h1 className='text-4xl mb-4'>Направления</h1><div className='grid md:grid-cols-3 gap-4'>{destinations.map(d=><DestinationCard key={d.slug} d={d}/>)}</div></div>}
