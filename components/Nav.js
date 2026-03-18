'use client';
import Link from 'next/link';
export default function Nav(){
  return <div className="nav"><Link href="/">Home</Link><Link href="/trending">Trending</Link><Link href="/submit">Submit</Link><Link href="/profile">Profile</Link></div>
}
