'use client';
import { useEffect, useState } from 'react';
import TokenCard from './TokenCard';
import Nav from './Nav';
const API = process.env.NEXT_PUBLIC_API_URL || '';
export default function HomeClient(){
  const [boosted, setBoosted] = useState([]);
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    let mounted = true;
    async function load(){
      try {
        const [aRes, bRes] = await Promise.all([
          fetch(`${API}/api/tokens/boosted`),
          fetch(`${API}/api/tokens/trending`),
        ]);
        const a = aRes.ok ? await aRes.json() : [];
        const b = bRes.ok ? await bRes.json() : [];
        if (!mounted) return;
        setBoosted(Array.isArray(a) ? a : []);
        setTrending(Array.isArray(b) ? b : []);
      } catch (e) {
        console.error(e);
        if (mounted) setError('Could not load live data.');
      }
    }
    load();
    return () => { mounted = false; };
  }, []);
  return <main className="page">
    <section className="hero">
      <div className="muted">SPYTON — DISCOVER. SCAN. PROMOTE.</div>
      <h1 className="sectionTitle">TON discovery hub for fresh launches, boosted listings, and fast token pages.</h1>
      <p className="muted">Built for SpyTON, focused fully on TON launches, discovery, promotion, and Telegram Mini App use.</p>
      <div className="row"><a className="btn" href="/submit">Submit Token</a><a className="btn secondary" href="/trending">View Trending</a></div>
    </section>
    {error ? <p className="muted" style={{marginTop:12}}>{error}</p> : null}
    <section style={{marginTop:28}}><h2>Boosted</h2><p className="muted">Paid placements with premium exposure</p><div className="cards">{boosted.map(t => <TokenCard key={t.id || t.slug || t.name} token={t} />)}</div></section>
    <section style={{marginTop:28}}><h2>Trending</h2><p className="muted">Most active TON listings right now</p><div className="cards">{trending.map(t => <TokenCard key={t.id || t.slug || t.name} token={t} />)}</div></section>
    <Nav />
  </main>;
}
