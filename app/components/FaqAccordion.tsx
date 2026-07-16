"use client";
import {useState} from "react";
export function FaqAccordion({items}:{items:[string,string][]}) {
 const [open,setOpen]=useState<number|null>(null);
 return <div className="faq-accordion">{items.map(([q,a],i)=><div className={"faq-item"+(open===i?" is-open":"")} key={q}>
  <button type="button" className="faq-trigger" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span>{q}</span><span className="faq-plus">+</span></button>
  <div className="faq-answer" aria-hidden={open!==i}><div><p>{a}</p></div></div>
 </div>)}</div>;
}