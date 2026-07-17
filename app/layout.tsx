import type {Metadata,Viewport} from "next";
import localFont from "next/font/local";
import Script from "next/script";
import {SiteFrame} from "./components/SiteFrame";
import "./globals.css";
const sans=localFont({src:"./fonts/geist-latin.woff2",variable:"--font-sans",weight:"100 900",display:"swap"});const mono=localFont({src:"./fonts/geist-mono-latin.woff2",variable:"--font-mono",weight:"100 900",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://fortypixels.com"),title:{default:"Forty Pixels | Strategy, design & engineering",template:"%s | Forty Pixels"},description:"Strategy, design and engineering for ambitious businesses.",icons:{icon:"/favicon.ico"},openGraph:{title:"Forty Pixels — Built to move business forward",description:"Strategy, design and engineering for ambitious businesses.",images:[{url:"/og.png",width:1792,height:912}]},twitter:{card:"summary_large_image",images:["/og.png"]}};
export const viewport:Viewport={width:"device-width",initialScale:1,viewportFit:"cover"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head><link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css"/></head><body className={`${sans.variable} ${mono.variable}`}><SiteFrame>{children}</SiteFrame><Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload"/></body></html>}
