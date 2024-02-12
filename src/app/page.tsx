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
// TODO: import ThroughTheYears from "@/app/components/ThroughTheYears";
import Hero from "./components/Hero";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ThroughTheYears from "@/app/components/ThroughTheYears";
import styled from "styled-components";
import { MobileBreakpoint } from "@/app/genericComponents/tokens";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("/stars_desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${MobileBreakpoint}) {
    background-image: url("/stars_mobile.jpg");
  }
`;

export default function Home() {
  return (
    <main>
      <Background />
      <Header />
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
      <Footer />
    </main>
  );
}
