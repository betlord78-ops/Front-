'use client';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import TokenCard from '../components/TokenCard';
const API = process.env.NEXT_PUBLIC_API_URL || '';
export default function Home(){
  const [boosted,setBoosted]=useState([]); const [trending,setTrending]=useState([]); const [error,setError]=useState('');
  useEffect(()=>{(async()=>{try{
    const [a,b]=await Promise.all([
      fetch(`${API}/api/tokens/boosted`).then(r=>r.json()),
      fetch(`${API}/api/tokens/trending`).then(r=>r.json())
    ]);
    setBoosted(Array.isArray(a)?a:[]); setTrending(Array.isArray(b)?b:[]);
  } catch(e){ setError('Could not load live data.'); }})();},[]);
  return <main className="page"><section className="hero"><div className="muted">SPYTON — DISCOVER. SCAN. PROMOTE.</div><h1 className="sectionTitle">TON discovery hub for fresh launches, boosted listings, and fast token pages.</h1><p className="muted">Built for SpyTON, focused fully on TON launches, discovery, promotion, and Telegram Mini App use.</p><div className="row"><a className="btn" href="/submit">Submit Token</a><a className="btn secondary" href="/trending">View Trending</a></div></section>{error ? <p className="error">{error}</p> : null}<section><h2>Boosted</h2><p className="muted">Paid placements with premium exposure</p><div className="cards">{boosted.map(t=><TokenCard key={t.id} token={t} />)}</div></section><section style={{marginTop:24}}><h2>Trending</h2><p className="muted">Most active TON listings right now</p><div className="cards">{trending.map(t=><TokenCard key={t.id} token={t} />)}</div></section><Nav /></main>
}
