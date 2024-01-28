"use client";

import About from "@/app/components/About";
import HowToParticipate from "@/app/components/HowToParticipate";
import Trailer from "@/app/components/Trailer";
import During from "@/app/components/During";
import Live from "@/app/components/Live";
import Provide from "@/app/components/Provide";
import FAQs from "@/app/components/FAQs";
import Socials from "@/app/components/Socials";
import SponsorsAndPartners from "@/app/components/SponsorsAndPartners";
import Hackers from "@/app/components/Hackers";
import ThroughTheYears from "@/app/components/ThroughTheYears";
import Hero from "./components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <HowToParticipate />
      <Trailer />
      <During />
      <Live />
      <Provide />
      <FAQs />
      <Socials />
      <SponsorsAndPartners />
      <Hackers />
      <ThroughTheYears />
    </main>
  );
}
