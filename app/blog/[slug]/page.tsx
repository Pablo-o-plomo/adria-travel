import { blogPosts } from '@/lib/data'; import { notFound } from 'next/navigation';
export default function P({params}:{params:{slug:string}}){const post=blogPosts.find(x=>x.slug===params.slug); if(!post) return notFound(); return <article><h1 className='text-4xl mb-4'>{post.title}</h1>{post.content.map((p,i)=><p key={i} className='mb-2'>{p}</p>)}</article>}
