'use client';
import { useState } from 'react';
import Nav from '../../components/Nav';
const API = process.env.NEXT_PUBLIC_API_URL || '';
export default function Submit(){
  const [form,setForm]=useState({name:'',symbol:'',description:'',website:'',telegram:'',twitter:''});
  const [msg,setMsg]=useState('');
  const onChange=e=>setForm({...form,[e.target.name]:e.target.value});
  const onSubmit=async(e)=>{e.preventDefault(); setMsg('Submitting...'); try{const res=await fetch(`${API}/api/submit`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); setMsg(res.ok?'Submitted successfully.':'Submission failed.');}catch{setMsg('Submission failed.');}};
  return <main className="page"><h1>Submit Token</h1><form onSubmit={onSubmit} className="card"><div className="grid2"><input className="input" name="name" placeholder="Token name" onChange={onChange}/><input className="input" name="symbol" placeholder="Ticker" onChange={onChange}/></div><div style={{marginTop:12}}><textarea className="textarea" name="description" placeholder="Description" onChange={onChange}/></div><div className="grid2" style={{marginTop:12}}><input className="input" name="website" placeholder="Website" onChange={onChange}/><input className="input" name="telegram" placeholder="Telegram" onChange={onChange}/></div><div style={{marginTop:12}}><input className="input" name="twitter" placeholder="X / Twitter" onChange={onChange}/></div><div style={{marginTop:12}}><button className="btn" type="submit">Submit</button></div>{msg ? <p className="muted">{msg}</p> : null}</form><Nav /></main>
}
