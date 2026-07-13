import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fortypixels.com"),
  title: "Forty Pixels | Premium web design & development agency",
  description: "Premium web design and development for startups and growing brands.",
  icons: { icon: "/brand/logo.png", shortcut: "/brand/logo.png" },
  openGraph: {
    title: "Forty Pixels | Clarity over complexity.",
    description: "Premium digital experiences for ambitious brands.",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 912, alt: "Forty Pixels — Clarity over complexity." }],
  },
  twitter: { card: "summary_large_image", title: "Forty Pixels | Clarity over complexity.", description: "Premium digital experiences for ambitious brands.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
