import { blogPosts } from '@/lib/data'; import BlogCard from '@/components/BlogCard';
export default function P(){return <div><h1 className='text-4xl mb-4'>Блог</h1><div className='grid md:grid-cols-2 gap-4'>{blogPosts.map(p=><BlogCard key={p.slug} post={p}/>)}</div></div>}
