import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
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

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero></Hero>
      <About></About>
      <HowToParticipate></HowToParticipate>
      <Trailer></Trailer>
      <During></During>
      <Live></Live>
      <Provide></Provide>
      <FAQs></FAQs>
      <Socials></Socials>
      <SponsorsAndPartners></SponsorsAndPartners>
      <Hackers></Hackers>
      <ThroughTheYears></ThroughTheYears>
    </main>
  );
}
