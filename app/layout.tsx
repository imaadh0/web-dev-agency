import type {Metadata} from "next";
import {Geist,Geist_Mono} from "next/font/google";
import {SiteFrame} from "./components/SiteFrame";
import "./globals.css";
const sans=Geist({variable:"--font-sans",subsets:["latin"]});const mono=Geist_Mono({variable:"--font-mono",subsets:["latin"]});
export const metadata:Metadata={metadataBase:new URL("https://fortypixels.com"),title:{default:"Forty Pixels | Strategy, design & engineering",template:"%s | Forty Pixels"},description:"Strategy, design and engineering for ambitious businesses.",icons:{icon:"/brand/logo.png"},openGraph:{title:"Forty Pixels — Built to move business forward",description:"Strategy, design and engineering for ambitious businesses.",images:[{url:"/og.png",width:1792,height:912}]},twitter:{card:"summary_large_image",images:["/og.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}><SiteFrame>{children}</SiteFrame></body></html>}
