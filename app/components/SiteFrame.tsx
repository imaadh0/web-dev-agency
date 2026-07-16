"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {createContext,useContext,useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

const pages=[
 {href:"/portfolio",label:"Portfolio"},{href:"/about",label:"About"},{href:"/services",label:"Services"}
];
const NavContext=createContext<(href:string)=>void>(()=>{});
export function TransitionLink({href,children,className=""}:{href:string;children:React.ReactNode;className?:string}){
 const go=useContext(NavContext);return <a href={href} className={className} onClick={e=>{if(!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&e.button===0){e.preventDefault();go(href)}}}>{children}</a>
}

function Arrow(){return <span className="ui-arrow" aria-hidden><i /></span>}

/* Choreographed offer-card demos: each card gets its own scripted loop. */
function launchDemo(demo:HTMLElement){
 const items=demo.querySelectorAll<HTMLElement>("[data-demo-item]");
 const dot=demo.querySelector<HTMLElement>("[data-demo-pulse]");
 const typeEl=demo.querySelector<HTMLElement>("[data-demo-type]");const screen=demo.querySelector<HTMLElement>(".launch-screen");
 const btn=demo.querySelector<HTMLElement>(".demo-button");const cursor=demo.querySelector<HTMLElement>(".demo-cursor");const ripple=demo.querySelector<HTMLElement>(".demo-ripple");
 if(!dot||!typeEl||!screen||!btn||!cursor||!ripple)return null;
 const url=typeEl.dataset.demoType||"";typeEl.textContent="";
 gsap.set(items,{autoAlpha:0,y:14});
 const chars={n:0};
 /* Page builds once and stays; the cursor-click action replays forever. */
 const tl=gsap.timeline({paused:true})
  .to(chars,{n:url.length,duration:.8,ease:"none",onUpdate:()=>{typeEl.textContent=url.slice(0,Math.round(chars.n))}},.2)
  .to(items,{autoAlpha:1,y:0,duration:.6,stagger:.17,ease:"back.out(1.7)"},.55);
 const act=gsap.timeline({repeat:-1,repeatDelay:.9})
  .set(cursor,{x:()=>screen.offsetWidth-26,y:()=>screen.offsetHeight-16,scale:1},0)
  .to(cursor,{autoAlpha:1,duration:.25},.05)
  .to(cursor,{x:()=>btn.offsetLeft+btn.offsetWidth*.7,y:()=>btn.offsetTop+btn.offsetHeight*.55,duration:.75,ease:"power2.inOut"},.2)
  .to(cursor,{scale:.78,duration:.12,yoyo:true,repeat:1,ease:"power2.in"},1.05)
  .to(btn,{scale:.93,duration:.13,yoyo:true,repeat:1,ease:"power2.in",transformOrigin:"center center"},1.05)
  .set(ripple,{scale:.4,autoAlpha:.9},1.15)
  .to(ripple,{scale:2.3,autoAlpha:0,duration:.6,ease:"power2.out"},1.17)
  .to(dot,{scale:1.6,duration:.28,yoyo:true,repeat:3,ease:"power1.inOut"},1.3)
  .to(cursor,{autoAlpha:0,duration:.35},1.9)
  .to({},{duration:1},2.4);
 return tl.add(act,1.9)
}
function commerceDemo(demo:HTMLElement){
 const product=demo.querySelector<HTMLElement>(".commerce-product");const add=demo.querySelector<HTMLElement>(".commerce-add");const fly=demo.querySelector<HTMLElement>(".commerce-fly");
 const steps=gsap.utils.toArray<HTMLElement>(demo.querySelectorAll<HTMLElement>(".commerce-step"));
 const dot=demo.querySelector<HTMLElement>("[data-demo-pulse]");
 if(!product||!add||!fly||!dot||steps.length<3)return null;
 const checks=steps.map(s=>s.querySelector<HTMLElement>("i")!);
 gsap.set(product,{autoAlpha:0,y:12});gsap.set(steps,{autoAlpha:0,x:-12});gsap.set(checks,{scale:0});gsap.set(fly,{autoAlpha:0});
 /* Product and steps build once and stay; the buying journey replays forever. */
 const tl=gsap.timeline({paused:true})
  .to(product,{autoAlpha:1,y:0,duration:.55,ease:"back.out(1.6)"},.2)
  .to(steps,{autoAlpha:1,x:0,duration:.5,stagger:.12,ease:"power3.out"},.5);
 const act=gsap.timeline({repeat:-1,repeatDelay:.8})
  .to(add,{scale:1.35,duration:.16,yoyo:true,repeat:1,ease:"power2.out"},.1)
  .set(fly,{x:()=>add.offsetLeft+add.offsetWidth/2-4,y:()=>add.offsetTop+add.offsetHeight/2-4,scale:1},.3)
  .to(fly,{autoAlpha:1,duration:.1},.32)
  .to(fly,{x:()=>steps[0].offsetLeft+steps[0].offsetWidth-26,y:()=>steps[0].offsetTop+steps[0].offsetHeight/2-4,scale:.55,duration:.5,ease:"power1.in"},.4)
  .to(fly,{autoAlpha:0,duration:.12},.88);
 [.95,1.5,2.05].forEach((t,i)=>{act.to(checks[i],{scale:1,duration:.5,ease:"back.out(3)"},t).to(steps[i],{scale:1.02,duration:.16,yoyo:true,repeat:1,ease:"power1.inOut"},t)});
 return tl.add(act
  .to(steps[2],{boxShadow:"0 0 0 9px rgba(104,66,206,.16)",duration:.4,yoyo:true,repeat:1,ease:"power1.inOut"},2.3)
  .to(checks[2],{scale:1.3,duration:.22,yoyo:true,repeat:1,ease:"power1.inOut"},2.6)
  .to(dot,{scale:1.6,duration:.28,yoyo:true,repeat:3,ease:"power1.inOut"},2.55)
  .to({},{duration:.9},3.4)
  .to(checks,{scale:0,duration:.3,ease:"power2.in"},4.3),1.15)
}
function systemsDemo(demo:HTMLElement){
 const core=demo.querySelector<HTMLElement>(".system-core");const health=demo.querySelector<HTMLElement>(".system-health");
 const rings=gsap.utils.toArray<HTMLElement>(demo.querySelectorAll<HTMLElement>(".system-ring"));
 const lines=Array.from(demo.querySelectorAll<SVGLineElement>(".system-lines line"));
 const nodes=gsap.utils.toArray<HTMLElement>(demo.querySelectorAll<HTMLElement>(".system-node"));
 const tracks=gsap.utils.toArray<HTMLElement>(demo.querySelectorAll<HTMLElement>(".node-track"));
 const packets=gsap.utils.toArray<HTMLElement>(demo.querySelectorAll<HTMLElement>(".system-packet"));
 if(!core||!health||nodes.length<4||lines.length<4||packets.length<4||rings.length<2)return null;
 const pos=[[16,15],[84,15],[16,85],[84,85]];
 gsap.set(core,{scale:0,autoAlpha:0});gsap.set(nodes,{autoAlpha:0,scale:.7});gsap.set(health,{autoAlpha:0,y:10});
 /* One-time build-in, then infinite ambient loops nested inside the master. */
 const tl=gsap.timeline({paused:true})
  .to(core,{scale:1,autoAlpha:1,duration:.5,ease:"back.out(2)"},.1)
  .set(rings[0],{scale:.35,autoAlpha:.9},.3)
  .to(rings[0],{scale:2.6,autoAlpha:0,duration:.9,ease:"power1.out"},.32)
  .to(lines,{strokeDashoffset:0,duration:.5,stagger:.08,ease:"power2.out"},.35)
  .to(nodes,{autoAlpha:1,scale:1,duration:.45,stagger:.08,ease:"back.out(1.8)"},.6)
  .to(health,{autoAlpha:1,y:0,duration:.45,ease:"power3.out"},1.15);
 const packetsTl=gsap.timeline({repeat:-1,repeatDelay:.5});
 packets.forEach((p,i)=>{const t=i*.55;
  packetsTl.set(p,{left:"50%",top:"50%"},t)
   .to(p,{autoAlpha:1,duration:.12},t+.02)
   .to(p,{left:`${pos[i][0]}%`,top:`${pos[i][1]}%`,duration:.55,ease:"power1.inOut"},t+.06)
   .to(p,{autoAlpha:0,duration:.12},t+.52)
   .to(nodes[i],{scale:1.08,duration:.16,yoyo:true,repeat:1,ease:"power1.inOut"},t+.52)});
 const ringsTl=gsap.timeline({repeat:-1,repeatDelay:1.7})
  .set(rings[1],{scale:.35,autoAlpha:.7},0)
  .to(rings[1],{scale:2.4,autoAlpha:0,duration:1.1,ease:"power1.out"},.02)
  .to(core,{scale:1.09,duration:.3,yoyo:true,repeat:1,ease:"power1.inOut"},0);
 const labelsTl=gsap.timeline({repeat:-1});
 [-26,-52,-78].forEach((y,i)=>labelsTl.to(tracks,{y,duration:.5,stagger:.06,ease:"power3.inOut"},1.6+i*2));
 labelsTl.set(tracks,{y:0},6.5);
 return tl.add(packetsTl,1.5).add(ringsTl,2.3).add(labelsTl,1.2)
}
function initOfferDemos(reduce:boolean){
 gsap.utils.toArray<HTMLElement>(".offer-demo").forEach(demo=>{
  if(reduce)return;
  const kind=demo.dataset.demo;
  const loop=kind==="launch"?launchDemo(demo):kind==="commerce"?commerceDemo(demo):kind==="systems"?systemsDemo(demo):null;
  if(!loop)return;
  ScrollTrigger.create({trigger:demo,start:"top 92%",end:"bottom 8%",onEnter:()=>loop.play(),onEnterBack:()=>loop.play(),onLeave:()=>loop.pause(),onLeaveBack:()=>loop.pause()})
 })
}

function Navigation(){
 const pathname=usePathname();const [open,setOpen]=useState(false);const go=useContext(NavContext);
 return <header className={`site-nav ${open?"menu-is-open":""}`} data-theme="hero">
  <div className="nav-blur">{[1,2,3,4,5].map(i=><i key={i}/>)}</div>
  <div className="nav-bar">
   <Link href="/" className="nav-logo" onClick={e=>{e.preventDefault();go("/")}} aria-label="Forty Pixels home"><span className="nav-logo-mark"><img src="/brand/logo.png" alt="Forty Pixels"/><img className="nav-logo-contrast" src="/brand/logo.png" alt="" aria-hidden="true"/></span></Link>
   <nav className="nav-cells" aria-label="Primary navigation">{pages.map(p=><a key={p.href} href={p.href} className={pathname===p.href||pathname.startsWith(`${p.href}/`)?"active":""} onClick={e=>{e.preventDefault();go(p.href)}}>{p.label}</a>)}</nav>
   <a href="/contact" className={`nav-contact ${pathname==="/contact"?"active":""}`} onClick={e=>{e.preventDefault();go("/contact")}}>Contact <Arrow/></a>
   <button className="nav-toggle" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label={open?"Close menu":"Open menu"}><span>{open?"×":"Menu"}</span></button>
  </div>
  <div className="mobile-panel" aria-hidden={!open}>{[...pages,{href:"/contact",label:"Contact"}].map((p,i)=><a key={p.href} href={p.href} className={pathname===p.href?"active":""} onClick={e=>{e.preventDefault();go(p.href)}}><small>0{i+1}</small><span>{p.label}</span><Arrow/></a>)}</div>
  <button className="menu-scrim" aria-label="Close menu" onClick={()=>setOpen(false)}/>
 </header>
}

function Footer(){
 return <footer className="sstr-footer" data-nav-theme="dark">
  <div className="footer-shell">
   <div className="footer-main">
    <div className="footer-identity"><Link href="/" className="footer-mark"><span>FORTY</span><span>PIXELS<span className="lime-dot">.</span></span></Link><p>Clarity over complexity.</p><div className="footer-location"><span>COLOMBO, SRI LANKA</span><span>© 2026 FORTY PIXELS</span></div></div>
    <div className="footer-directory">
     <div><span className="footer-label">Pages</span><div className="footer-list"><TransitionLink href="/about">About</TransitionLink><TransitionLink href="/portfolio">Portfolio</TransitionLink><TransitionLink href="/services">Services</TransitionLink><TransitionLink href="/contact">Contact</TransitionLink></div></div><div><span className="footer-label">Start a project</span><a href="mailto:hello@fortypixels.com" className="footer-email">hello@fortypixels.com <Arrow/></a><a href="https://calendly.com/" target="_blank" rel="noreferrer" className="footer-book">Book a discovery call <Arrow/></a><form className="footer-subscribe" action="mailto:hello@fortypixels.com" method="post" encType="text/plain"><div><input id="footer-email" type="email" name="newsletter" required placeholder="Your email"/><button aria-label="Subscribe"><span className="ui-arrow" aria-hidden><i /></span></button></div><small>No spam. Only practical design and website advice.</small></form></div>


     <div className="footer-socials"><span className="footer-label">Follow</span><div><a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1.1"/></svg></a><a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.75l.5-3H13.5V9.05c0-.87.29-1.55 1.6-1.55h1.78V4.82c-.31-.04-1.37-.14-2.6-.14-2.57 0-4.33 1.57-4.33 4.45V11H7.1v3h2.85v8h3.55Z"/></svg></a><a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3.5c.6 2.2 2 3.7 4.5 4v3.2c-1.9-.1-3.4-.7-4.5-1.5v6.9a5.9 5.9 0 1 1-5.1-5.85v3.3a2.7 2.7 0 1 0 1.9 2.55V3.5h3.2Z"/></svg></a></div></div>
    </div>
   </div>

  </div>
 </footer>
}

export function SiteFrame({children}:{children:React.ReactNode}){
 const pathname=usePathname();const curtain=useRef<HTMLDivElement>(null);const [target,setTarget]=useState("");
 const go=(href:string)=>{if(href===pathname)return;const name=href==="/"?"Home":href.split("/").filter(Boolean).pop()?.replaceAll("-"," ")||"Next";setTarget(name);const label=curtain.current?.querySelector("strong");if(label)label.textContent=name;gsap.timeline().set(curtain.current,{yPercent:100,display:"grid"}).to(curtain.current,{yPercent:0,duration:.75,ease:"power4.inOut"}).add(()=>window.location.assign(href))};
 useEffect(()=>{const restoreFromHistory=(event:PageTransitionEvent)=>{if(!event.persisted)return;document.querySelector(".global-preloader")?.remove();if(curtain.current){curtain.current.style.display="none";curtain.current.style.transform="translateY(-100%)"}if(typeof lenis!=="undefined")lenis.start();};window.addEventListener("pageshow",restoreFromHistory);gsap.registerPlugin(ScrollTrigger);const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;const lenis=new Lenis({lerp:.1,smoothWheel:!reduce});lenis.on("scroll",ScrollTrigger.update);const tick=(t:number)=>lenis.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);window.scrollTo(0,0);
  const ctx=gsap.context(()=>{
   const pre=document.querySelector<HTMLElement>(".global-preloader");if(pre&&sessionStorage.getItem("fp-preloader")!=="1"&&!reduce){lenis.stop();sessionStorage.setItem("fp-preloader","1");const n={v:0};gsap.timeline().to(n,{v:100,duration:2.8,ease:"power2.inOut",onUpdate:()=>{const el=pre.querySelector("strong");if(el)el.textContent=`${Math.round(n.v)}%`;pre.style.setProperty("--load",`${n.v}%`)}}).to(pre,{yPercent:-100,duration:1.2,ease:"power4.inOut"}).add(()=>{lenis.start();pre.remove()})}else pre?.remove();
   gsap.set(curtain.current,{yPercent:0,display:"grid"});gsap.to(curtain.current,{yPercent:-100,duration:.85,ease:"power4.inOut",delay:.05,onComplete:()=>{if(curtain.current)curtain.current.style.display="none"}});
   gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el,i)=>gsap.fromTo(el,{y:65,autoAlpha:0},{y:0,autoAlpha:1,duration:1,delay:(i%3)*.04,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",toggleActions:"play none none reverse"}}));
   gsap.utils.toArray<HTMLElement>("[data-words]").forEach(el=>{const words=el.querySelectorAll(".word");gsap.fromTo(words,{yPercent:110},{yPercent:0,duration:1.1,stagger:.035,ease:"power4.out",scrollTrigger:{trigger:el,start:"top 88%",toggleActions:"play none none reverse"}})});
   gsap.utils.toArray<HTMLElement>("[data-fill]").forEach(el=>gsap.fromTo(el.querySelectorAll("span"),{opacity:.16},{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:el,start:"top 80%",end:"bottom 55%",scrub:true}}));
   gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el=>gsap.fromTo(el,{yPercent:14},{yPercent:-14,ease:"none",scrollTrigger:{trigger:el.parentElement,start:"top bottom",end:"bottom top",scrub:true}}));
   gsap.utils.toArray<HTMLElement>("[data-count]").forEach(el=>{const end=Number(el.dataset.count||0);if(reduce){el.textContent=String(end);return}const counter={value:0};gsap.to(counter,{value:end,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:el.closest(".number-grid")||el,start:"top 82%",once:true},onUpdate:()=>{el.textContent=String(Math.round(counter.value))}})});
   initOfferDemos(reduce);
   document.querySelectorAll<HTMLElement>("[data-nav-theme]").forEach(section=>ScrollTrigger.create({trigger:section,start:"top 10%",end:"bottom 10%",onEnter:()=>document.querySelector(".site-nav")?.setAttribute("data-theme",section.dataset.navTheme||"light"),onEnterBack:()=>document.querySelector(".site-nav")?.setAttribute("data-theme",section.dataset.navTheme||"light")}));
  });
  return()=>{window.removeEventListener("pageshow",restoreFromHistory);ctx.revert();ScrollTrigger.getAll().forEach(t=>t.kill());gsap.ticker.remove(tick);lenis.destroy()}
 },[pathname]);
 return <NavContext.Provider value={go}><div className="global-preloader"><span>{"// FORTY PIXELS — LOADING"}</span><strong>0%</strong><i/></div><div ref={curtain} className="route-curtain"><strong>{target}</strong></div><Navigation/><div className="page-wrap">{children}</div><Footer/></NavContext.Provider>
}
