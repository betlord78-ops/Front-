'use client';
import { useEffect, useState } from 'react';
import Nav from '../../../components/Nav';
const API = process.env.NEXT_PUBLIC_API_URL || '';
export default function TokenPage({ params }){
  const [token,setToken]=useState(null);
  useEffect(()=>{fetch(`${API}/api/tokens/${params.slug}`).then(r=>r.json()).then(setToken).catch(()=>setToken(null));},[params.slug]);
  return <main className="page">{token ? <div className="card"><h1>{token.name} ({token.symbol})</h1><p className="muted">{token.description}</p><p>Website: {token.website}</p><p>Telegram: {token.telegram}</p><p>X: {token.twitter}</p><p>Contract: {token.contract_address}</p><p>Pool: {token.pool_address}</p><p>MC: ${Number(token.market_cap||0).toLocaleString()}</p><p>Liquidity: ${Number(token.liquidity||0).toLocaleString()}</p><p>Upvotes: {token.upvotes||0}</p></div> : <p className="muted">Loading token...</p>}<Nav /></main>
}
