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
import Hero from "./components/Hero";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThroughTheYears from "@/app/components/ThroughTheYears/ThroughTheYears";
import Spacer from "@/app/components/Spacer";
import { Background } from "@/app/genericComponents/General";

export default function Home() {
  return (
    <main>
      <Background />
      <Header />
      <Hero />
      <Spacer />
      <About />
      <Spacer />
      <HowToParticipate />
      <Spacer />
      <Trailer />
      <Spacer />
      <During />
      <Spacer />
      <Live />
      <Spacer />
      <Provide />
      <Spacer />
      <FAQs />
      <Spacer />
      <Socials />
      <Spacer />
      <SponsorsAndPartners />
      <Spacer />
      <Hackers />
      <Spacer />
      <ThroughTheYears />
      <Spacer />
      <Footer />
    </main>
  );
}
