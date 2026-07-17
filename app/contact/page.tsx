import type {Metadata} from "next";
import {Arrow,CalendlyLink,Eyebrow,VideoHero,Words} from "../components/Sections";
import {ContactForm} from "./ContactForm";
export const metadata:Metadata={title:"Contact",description:"Tell Forty Pixels what you are building and get a clear next step."};
export default function Contact(){return <main><VideoHero video="/videos/landing-hero-video.mp4" kicker="START A PROJECT" title="Tell us what needs to move forward." copy="Share the goal, the difficult part and what success should look like. We will respond with the clearest next step."/>
<section className="contact-page section-pad" data-nav-theme="light"><Eyebrow index="01" label="Project enquiry"/><div className="contact-layout"><div><h2><Words>Start with the useful details.</Words></h2><p data-reveal>Replies usually arrive within one working day. Prefer a conversation? Book a discovery call or write directly.</p><div className="direct-links"><a href="mailto:hello@fortypixels.com">hello@fortypixels.com <Arrow/></a><CalendlyLink>Book a discovery call <Arrow/></CalendlyLink></div></div><ContactForm/></div></section>
</main>}
