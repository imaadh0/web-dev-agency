"use client";
import {useState} from "react";
import {Arrow} from "../components/Sections";
export function ContactForm(){
 const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
 const submit=async(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();setStatus("sending");
  const form=e.currentTarget;const data=new FormData(form);
  data.append("access_key",process.env.NEXT_PUBLIC_WEB3FORMS_KEY||"");
  data.append("subject",`New project enquiry from ${data.get("name")}`);
  try{
   const res=await fetch("https://api.web3forms.com/submit",{method:"POST",body:data});
   const json=await res.json();
   if(json.success){setStatus("sent");form.reset()}else{setStatus("error")}
  }catch{setStatus("error")}
 };
 return <form onSubmit={submit} className="project-form" data-reveal>
  <label><span>Your name *</span><input name="name" required placeholder="Jane Smith"/></label>
  <label><span>Email *</span><input name="email" type="email" required placeholder="jane@company.com"/></label>
  <label><span>Company</span><input name="company" placeholder="Company name"/></label>
  <label><span>What do you need?</span><select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Website design & development</option><option>Commerce</option><option>Enterprise product</option><option>Something else</option></select></label>
  <label className="full"><span>Project context *</span><textarea name="context" required rows={6} placeholder="What are you building, what is not working today and when would you like to launch?"/></label>
  <button type="submit" disabled={status==="sending"}>{status==="sending"?"Sending":"Send enquiry"} <Arrow/></button>
  {status==="sent"&&<div className="form-status form-status-ok" role="status"><span className="form-status-icon" aria-hidden><svg viewBox="0 0 24 24"><path d="M4 12.5L9.5 18L20 6"/></svg></span><div><strong>Message sent</strong><p>Thanks — we’ll reply within one working day.</p></div></div>}
  {status==="error"&&<div className="form-status form-status-error" role="status"><span className="form-status-icon" aria-hidden><svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5h.01M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"/></svg></span><div><strong>Something went wrong</strong><p>Email us directly at <a href="mailto:hello@fortypixels.com">hello@fortypixels.com</a>.</p></div></div>}
 </form>
}
