import type { Metadata } from "next";
import { HomeExperience } from "./HomeExperience";

export const metadata: Metadata = {
  title: "Forty Pixels | Premium web design & development agency",
  description: "Forty Pixels creates premium, conversion-focused websites for startups and growing brands.",
};

export default function Home() {
  return <HomeExperience />;
}
