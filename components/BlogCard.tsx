import Link from 'next/link'; import { BlogPost } from '@/lib/data';
export default function BlogCard({post}:{post:BlogPost}){return <Link href={`/blog/${post.slug}`} className='block bg-white rounded-xl p-4'><h3>{post.title}</h3><p>{post.excerpt}</p></Link>}
