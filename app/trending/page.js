'use client';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import TokenCard from '../../components/TokenCard';
const API = process.env.NEXT_PUBLIC_API_URL || '';
export default function Trending(){
  const [tokens,setTokens]=useState([]);
  useEffect(()=>{fetch(`${API}/api/tokens/trending`).then(r=>r.json()).then(setTokens).catch(()=>setTokens([]));},[]);
  return <main className="page"><h1>Trending</h1><div className="cards">{tokens.map(t=><TokenCard key={t.id} token={t} />)}</div><Nav /></main>
}
