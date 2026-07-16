"use client";

import {useState} from "react";
import {Arrow,TransitionLink,Words} from "../components/Sections";

type Currency="USD"|"EUR"|"LKR";
type Price={USD:number;EUR:number;LKR:number};
type Package={name:string;price:Price|null;description:string;timeline?:string;monthly?:boolean};

const currencies:Currency[]=["USD","EUR","LKR"];
const symbols:Record<Currency,string>={USD:"$",EUR:"€",LKR:"LKR "};

const groups:{title:string;note?:string;packages:Package[]}[]=[
 {title:"Landing pages",packages:[
  {name:"Launch Page",price:{USD:199,EUR:189,LKR:30000},description:"A clean single page that gets people to act.",timeline:"~1 week"},
  {name:"Growth Page",price:{USD:349,EUR:329,LKR:55000},description:"A bigger page you can edit yourself, with light motion.",timeline:"~1–2 weeks"},
  {name:"Luxury Scroll",price:{USD:699,EUR:649,LKR:110000},description:"A cinematic, scrolling experience built for impact.",timeline:"~2–3 weeks"},
  {name:"Custom",price:null,description:"Quoted after a short chat."}
 ]},
 {title:"Websites",packages:[
  {name:"Brand Website",price:{USD:399,EUR:369,LKR:60000},description:"A professional site, up to 5 pages.",timeline:"~2 weeks"},
  {name:"Professional",price:{USD:649,EUR:599,LKR:100000},description:"6–10 pages, a blog, and content you can edit.",timeline:"~3–4 weeks"},
  {name:"Corporate",price:{USD:1099,EUR:999,LKR:170000},description:"A large, multi-language site built to scale.",timeline:"~6–8 weeks"},
  {name:"Custom Platform",price:null,description:"Quoted after a discovery call."}
 ]},
 {title:"Online stores",note:"Yours to own and run.",packages:[
  {name:"Commerce Lite",price:{USD:329,EUR:299,LKR:50000},description:"Up to 100 products, ready to sell.",timeline:"~2–3 weeks"},
  {name:"Commerce Growth",price:{USD:749,EUR:699,LKR:120000},description:"Up to 300 products, filters, coupons, and order management.",timeline:"~4–5 weeks"},
  {name:"Commerce Advanced",price:{USD:1399,EUR:1299,LKR:220000},description:"Unlimited products, search, inventory, and a sales dashboard.",timeline:"~6–8 weeks"},
  {name:"Custom Store",price:null,description:"Quoted to scope."}
 ]},
 {title:"Mobile apps",note:"iOS + Android.",packages:[
  {name:"App Starter",price:{USD:999,EUR:899,LKR:150000},description:"A solid first app with login and core features.",timeline:"~4–6 weeks"},
  {name:"App Professional",price:{USD:1899,EUR:1749,LKR:300000},description:"Payments, notifications, and an admin dashboard.",timeline:"~8–10 weeks"},
  {name:"App Marketplace",price:{USD:2799,EUR:2599,LKR:450000},description:"A full multi-seller app with booking and analytics.",timeline:"~10–14 weeks"},
  {name:"Custom App",price:null,description:"Quoted by scope."}
 ]}
];

const social:Package[]=[
 {name:"Essentials",price:{USD:159,EUR:149,LKR:25000},monthly:true,description:"12 posts a month, 2 platforms, a content plan, captions, and a simple report."},
 {name:"Growth",price:{USD:349,EUR:329,LKR:55000},monthly:true,description:"20 posts, 3 platforms, scheduling handled, 2 short videos, and a monthly review."},
 {name:"Full Management",price:{USD:599,EUR:549,LKR:95000},monthly:true,description:"30+ posts, 4 platforms, videos, audience replies, ad creatives, and a monthly strategy call."}
];

const ongoing:Package[]=[
 {name:"Basic",price:{USD:49,EUR:45,LKR:7000},monthly:true,description:"Bug fixes, small updates, security, and uptime checks."},
 {name:"Pro",price:{USD:129,EUR:119,LKR:20000},monthly:true,description:"Everything in Basic, plus performance monitoring, content help, and priority support."},
 {name:"Growth Retainer",price:{USD:199,EUR:189,LKR:30000},monthly:true,description:"Ongoing improvements, UX tweaks, better conversions, and regular strategy."}
];

const faq=[
 ["What's in the price?","Everything in the package scope, designed and built by us, start to finish. No hidden fees."],
 ["How do payments work?","A deposit to begin, the balance on launch. We lay it all out on the call."],
 ["Do I own it?","Yes — design, code, and your content account. No lock-in."],
 ["How many revisions?","Each package includes revision rounds within scope, agreed before we start."],
 ["Can I edit it myself?","On Growth tiers and up, yes. We'll show you how."],
 ["How fast?","Most projects launch within the window shown. Bigger builds are planned per project."]
];

function Price({item,currency}:{item:Package;currency:Currency}){
 if(!item.price)return <span className="pricing-quote">Quoted</span>;
 return <span className="pricing-price" key={currency}>{symbols[currency]}{item.price[currency].toLocaleString("en-US")}{item.monthly&&<small>/mo</small>}</span>
}

function PackageRows({items,currency}:{items:Package[];currency:Currency}){
 return <div className="pricing-rows">{items.map((item,index)=><article className={`pricing-row ${item.price?"":"is-custom"}`} key={item.name} data-reveal>
  <span className="pricing-row-index">{String(index+1).padStart(2,"0")}</span>
  <h3>{item.name}</h3>
  <div className="pricing-row-copy"><p>{item.description}</p>{item.timeline&&<span>{item.timeline}</span>}</div>
  <Price item={item} currency={currency}/>
 </article>)}</div>
}

export function PricingClient(){
 const [currency,setCurrency]=useState<Currency>("USD");
 const choose=(next:Currency)=>setCurrency(next);
 return <main className="pricing-page">
  <section className="pricing-hero" id="top" data-nav-theme="light">
   <div className="pricing-hero-top"><span>{"// PRICING"}</span><span>FIXED SCOPE · CLEAR DELIVERY</span></div>
   <h1><Words>Fixed prices. Everything spelled out.</Words></h1>
   <p data-reveal>Every build is handled start to finish, with the scope written down before we begin. Prices show in your currency — switch below.</p>
  </section>

  <section className="pricing-currency" data-nav-theme="dark" aria-label="Choose pricing currency">
   <div>
    <span className="pricing-currency-label">Show prices in</span>
    <div className="currency-toggle" role="group" aria-label="Currency">
     {currencies.map(code=><button key={code} type="button" className={currency===code?"is-active":""} aria-pressed={currency===code} onClick={()=>choose(code)}>{code}{code==="LKR"&&<sup>*</sup>}</button>)}
    </div>
   </div>
   
  </section>

  <div className="pricing-catalog">
   {groups.map((group,index)=><section className="pricing-group" key={group.title} data-nav-theme="light">
    <header><span>0{index+1}</span><h2>{group.title}</h2>{group.note&&<p>{group.note}</p>}</header>
    <PackageRows items={group.packages} currency={currency}/>
   </section>)}
  </div>

  <section className="pricing-custom" data-nav-theme="dark">
   <span>{"// SCALABLE BUILD"}</span>
   <h2><Words>Bigger than a package?</Words></h2>
   <p data-reveal>Delivery apps, booking systems, platforms, automation — priced by features, integrations, and complexity. Planned per project.</p>
   <TransitionLink href="/contact" className="pricing-inline-link">Plan a custom build <Arrow/></TransitionLink>
  </section>

  <section className="pricing-service pricing-social" data-nav-theme="lime">
   <header><span>{"// ADD-ON: SOCIAL"}</span><h2><Words>We built it. We can run it too.</Words></h2><p>A great site is half the story — people still have to find you. Once you're live, we keep the brand active: posts, graphics, the whole thing managed.</p></header>
   <PackageRows items={social} currency={currency}/>
  </section>

  <section className="pricing-service pricing-ongoing" data-nav-theme="light">
   <header><span>{"// ONGOING"}</span><h2><Words>Live is the start, not the finish.</Words></h2></header>
   <PackageRows items={ongoing} currency={currency}/>
  </section>

  <section className="pricing-faq" data-nav-theme="dark">
   <div className="pricing-faq-title"><span>{"// FAQ"}</span><h2><Words>Before you ask.</Words></h2></div>
   <div className="pricing-faq-list">{faq.map(([question,answer],index)=><article key={question} data-reveal><span>0{index+1}</span><h3>{question}</h3><p>{answer}</p></article>)}</div>
  </section>

  <section className="pricing-closing" data-nav-theme="lime">
   <span>{"// NO PRESSURE. JUST CLARITY."}</span>
   <h2><Words>Still deciding? Let's talk it through.</Words></h2>
   <TransitionLink href="/contact" className="pricing-book">Book a free call <Arrow/></TransitionLink>
  </section>
 </main>
}

