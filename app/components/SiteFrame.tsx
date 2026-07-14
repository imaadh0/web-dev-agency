"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {createContext,useContext,useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";

const pages=[
 {href:"/work",label:"Work"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/enterprise",label:"Enterprise"}
];
const NavContext=createContext<(href:string)=>void>(()=>{});
export function TransitionLink({href,children,className=""}:{href:string;children:React.ReactNode;className?:string}){
 const go=useContext(NavContext);return <a href={href} className={className} onClick={e=>{if(!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&e.button===0){e.preventDefault();go(href)}}}>{children}</a>
}

function Arrow(){return <span className="ui-arrow" aria-hidden><i /></span>}

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
    <div className="footer-identity"><Link href="/" className="footer-mark"><span>FORTY</span><span>PIXELS<span className="lime-dot">.</span></span></Link><p>Premium digital experiences for ambitious businesses.</p><div className="footer-location"><span>COLOMBO, SRI LANKA</span><span>WORKING WORLDWIDE</span></div></div>
    <div className="footer-directory">
     <div><span className="footer-label">Pages</span><div className="footer-list"><TransitionLink href="/about">About</TransitionLink><TransitionLink href="/work">Work</TransitionLink><TransitionLink href="/services">Services</TransitionLink><TransitionLink href="/enterprise">Enterprise</TransitionLink><TransitionLink href="/contact">Contact</TransitionLink></div></div>
     <div><span className="footer-label">Start a project</span><a href="mailto:hello@fortypixels.com" className="footer-email">hello@fortypixels.com <Arrow/></a><a href="https://calendly.com/" target="_blank" rel="noreferrer" className="footer-book">Book a discovery call <Arrow/></a></div>
     <form className="footer-subscribe" action="mailto:hello@fortypixels.com" method="post" encType="text/plain"><label htmlFor="footer-email">Useful notes for founders</label><div><input id="footer-email" type="email" name="newsletter" required placeholder="Your email"/><button aria-label="Subscribe"><span className="ui-arrow" aria-hidden><i /></span></button></div><small>No spam. Only practical design and website advice.</small></form>
     <div className="footer-socials"><span className="footer-label">Follow</span><div><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="X">x</a></div></div>
    </div>
   </div>
   <div className="footer-bottom"><span>© 2026 FORTY PIXELS</span><span>VIDEO FOOTAGE: <a href="https://coverr.co" target="_blank" rel="noreferrer">COVERR</a></span><a href="#top">BACK TO TOP <span className="text-arrow" aria-hidden /></a></div>
  </div>
 </footer>
}

export function SiteFrame({children}:{children:React.ReactNode}){
 const pathname=usePathname();const curtain=useRef<HTMLDivElement>(null);const [target,setTarget]=useState("");
 const go=(href:string)=>{if(href===pathname)return;setTarget(href);const name=href==="/"?"Home":href.split("/").filter(Boolean).pop()?.replaceAll("-"," ")||"Next";const label=curtain.current?.querySelector("strong");if(label)label.textContent=name;gsap.timeline().set(curtain.current,{yPercent:100,display:"grid"}).to(curtain.current,{yPercent:0,duration:.75,ease:"power4.inOut"}).add(()=>window.location.assign(href))};
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;const lenis=new Lenis({lerp:.1,smoothWheel:!reduce});lenis.on("scroll",ScrollTrigger.update);const tick=(t:number)=>lenis.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);window.scrollTo(0,0);
  const ctx=gsap.context(()=>{
   const pre=document.querySelector<HTMLElement>(".global-preloader");if(pre&&sessionStorage.getItem("fp-preloader")!=="1"&&!reduce){lenis.stop();sessionStorage.setItem("fp-preloader","1");const n={v:0};gsap.timeline().to(n,{v:100,duration:2.8,ease:"power2.inOut",onUpdate:()=>{const el=pre.querySelector("strong");if(el)el.textContent=`${Math.round(n.v)}%`;pre.style.setProperty("--load",`${n.v}%`)}}).to(pre,{yPercent:-100,duration:1.2,ease:"power4.inOut"}).add(()=>{lenis.start();pre.remove()})}else pre?.remove();
   gsap.set(curtain.current,{yPercent:0,display:"grid"});gsap.to(curtain.current,{yPercent:-100,duration:.85,ease:"power4.inOut",delay:.05,onComplete:()=>{if(curtain.current)curtain.current.style.display="none"}});
   gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el,i)=>gsap.fromTo(el,{y:65,autoAlpha:0},{y:0,autoAlpha:1,duration:1,delay:(i%3)*.04,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",toggleActions:"play none none reverse"}}));
   gsap.utils.toArray<HTMLElement>("[data-words]").forEach(el=>{const words=el.querySelectorAll(".word");gsap.fromTo(words,{yPercent:110},{yPercent:0,duration:1.1,stagger:.035,ease:"power4.out",scrollTrigger:{trigger:el,start:"top 88%",toggleActions:"play none none reverse"}})});
   gsap.utils.toArray<HTMLElement>("[data-fill]").forEach(el=>gsap.fromTo(el.querySelectorAll("span"),{opacity:.16},{opacity:1,stagger:.06,ease:"none",scrollTrigger:{trigger:el,start:"top 80%",end:"bottom 55%",scrub:true}}));
   gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach(el=>gsap.fromTo(el,{yPercent:14},{yPercent:-14,ease:"none",scrollTrigger:{trigger:el.parentElement,start:"top bottom",end:"bottom top",scrub:true}}));
   gsap.utils.toArray<HTMLElement>("[data-count]").forEach(el=>{const end=Number(el.dataset.count||0);if(reduce){el.textContent=String(end);return}const counter={value:0};gsap.to(counter,{value:end,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:el.closest(".number-grid")||el,start:"top 82%",once:true},onUpdate:()=>{el.textContent=String(Math.round(counter.value))}})});
   gsap.utils.toArray<HTMLElement>(".offer-demo").forEach((demo,index)=>{const items=demo.querySelectorAll<HTMLElement>("[data-demo-item]");const bars=demo.querySelectorAll<HTMLElement>("[data-demo-bar]");const pulses=demo.querySelectorAll<HTMLElement>("[data-demo-pulse]");if(reduce){gsap.set(items,{autoAlpha:1,y:0});gsap.set(bars,{scaleX:1});return}gsap.set(bars,{scaleX:0,transformOrigin:"left center"});const loop=gsap.timeline({paused:true,repeat:-1,repeatDelay:.65,delay:index*.12}).fromTo(items,{autoAlpha:.28,y:7},{autoAlpha:1,y:0,duration:.55,stagger:.3,ease:"power3.out"}).to(bars,{scaleX:1,duration:.9,stagger:.18,ease:"power2.inOut"},.15).to(pulses,{scale:1.16,duration:.35,yoyo:true,repeat:1,ease:"power2.inOut"},.65).to({}, {duration:1.25}).to(items,{autoAlpha:.28,duration:.4,stagger:.1}).set(bars,{scaleX:0});ScrollTrigger.create({trigger:demo,start:"top 92%",end:"bottom 8%",onEnter:()=>loop.play(),onEnterBack:()=>loop.play(),onLeave:()=>loop.pause(),onLeaveBack:()=>loop.pause()})});
   document.querySelectorAll<HTMLElement>("[data-nav-theme]").forEach(section=>ScrollTrigger.create({trigger:section,start:"top 10%",end:"bottom 10%",onEnter:()=>document.querySelector(".site-nav")?.setAttribute("data-theme",section.dataset.navTheme||"light"),onEnterBack:()=>document.querySelector(".site-nav")?.setAttribute("data-theme",section.dataset.navTheme||"light")}));
  });
  return()=>{ctx.revert();ScrollTrigger.getAll().forEach(t=>t.kill());gsap.ticker.remove(tick);lenis.destroy()}
 },[pathname]);
 return <NavContext.Provider value={go}><div className="global-preloader"><span>{"// FORTY PIXELS — LOADING"}</span><strong>0%</strong><i/></div><div ref={curtain} className="route-curtain"><small>{"// LOADING PAGE"}</small><strong>{target}</strong></div><Navigation/><div className="page-wrap">{children}</div><Footer/></NavContext.Provider>
}
