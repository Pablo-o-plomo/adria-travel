import { faqItems } from '@/lib/data';
export default function FAQ(){return <section><h2 className='text-3xl font-semibold mb-4'>FAQ</h2>{faqItems.map(f=><details key={f.q} className='bg-white rounded-xl p-4 mb-2'><summary>{f.q}</summary><p className='mt-2'>{f.a}</p></details>)}</section>}
