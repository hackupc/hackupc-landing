import React from "react";

import styled, { keyframes } from "styled-components";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import { MaxScreenSize } from "@/app/genericComponents/tokens";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./ThroughTheYears/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

//import "./ThroughTheYears/css/base.css";

import "./ThroughTheYears/css/embla.css";

//import "./ThroughTheYears/css/sandbox.css";

const Bullet = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: lightslategrey;
  border-radius: 50%;
  margin: 0 5px;

  &:hover {
    background-color: orangered;
  }

  &.Wactive {
    background-color: orangered;
  }
`;

const Edition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
`;

export default function ThroughTheYears() {
  const PREVIOUS_EDITIONS = [
    {
      name: "Fall 2016",
      date: "October 23-25",
      img: "/Planets/planetPartner.svg",
      url: "",
    },
    {
      name: "Winter 2016",
      date: "May 8-12",
      img: "/Planets/planetSponsor.svg",
      url: "",
    },
    {
      name: "Fall 2017",
      date: "May 3-5",
      img: "/Planets/planetMentor.svg",
      url: "",
    },
    {
      name: "Winter 2017",
      date: "May 3-5",
      img: "/Planets/planetVolunteer.svg",
      url: "",
    },
    {
      name: "2018",
      date: "May 3-5",
      img: "/Planets/planetPartner.svg",
      url: "https://2018.hackupc.com/",
    },
    {
      name: "2019",
      date: "May 3-5",
      img: "/Planets/planetSponsor.svg",
      url: "https://2019.hackupc.com/",
    },
    {
      name: "2020",
      date: "CANCELLED",
      img: "/Planets/planetMentor.svg",
      url: "",
    },
    {
      name: "2021",
      date: "May 3-5",
      img: "/Planets/planetVolunteer.svg",
      url: "https://2021.hackupc.com/",
    },
    {
      name: "2022",
      date: "May 3-5",
      img: "/Planets/planetVolunteer.svg",
      url: "https://2022.hackupc.com/",
    },
    {
      name: "2023",
      date: "May 3-5",
      img: "/Planets/planetVolunteer.svg",
      url: "https://2023.hackupc.com/",
    },
  ];

  const [emblaRef] = useEmblaCarousel();
  const OPTIONS: EmblaOptionsType = {
    align: "start",
    loop: true,
    slidesToScroll: 2,
  };

  return (
    <Section>
      <SectionTitle>Through The Years</SectionTitle>
      <EmblaCarousel slides={PREVIOUS_EDITIONS} options={OPTIONS} />
    </Section>
  );
}
