import Link from 'next/link';
export default function TokenCard({token}){
  return <div className="card">
    <div className="row" style={{justifyContent:'space-between',alignItems:'center'}}>
      <div><div className="title">{token.name}</div><div className="muted">{token.symbol}</div></div>
      {token.is_boosted ? <span className="badge">Boosted</span> : null}
    </div>
    <p className="muted">{token.description}</p>
    <div className="small">MC: ${Number(token.market_cap||0).toLocaleString()}</div>
    <div className="small">Vol 24h: ${Number(token.volume_24h||0).toLocaleString()}</div>
    <div className="small">Upvotes: {token.upvotes||0}</div>
    <div style={{marginTop:12}}><Link className="btn secondary" href={`/token/${token.slug}`}>View token</Link></div>
  </div>
}
