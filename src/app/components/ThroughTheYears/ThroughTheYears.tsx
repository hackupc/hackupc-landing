import React from "react";

import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import EmblaCarousel from "./EmblaCarousel";
// eslint-disable-next-line import/no-extraneous-dependencies
import { EmblaOptionsType } from "embla-carousel";

export default function ThroughTheYears() {
  const PREVIOUS_EDITIONS = [
    {
      name: "Spring 2016",
      date: "Feb 19-21",
      img: "/Planets/planetSponsor.svg",
      url: "https://s2016.hackupc.com/",
    },
    {
      name: "Fall 2016",
      date: "Oct 7-9",
      img: "/Planets/planetPartner.svg",
      url: "https://f2016.hackupc.com/",
    },

    {
      name: "Fall 2017",
      date: "Oct 13-15",
      img: "/Planets/planetMentor.svg",
      url: "https://f2017.hackupc.com/",
    },
    {
      name: "Winter 2017",
      date: "March 3-5",
      img: "/Planets/planetVolunteer.svg",
      url: "https://w2017.hackupc.com/",
    },
    {
      name: "2018",
      date: "Oct 19-21",
      img: "/Planets/planetPartner.svg",
      url: "https://2018.hackupc.com/",
    },
    {
      name: "2019",
      date: "Oct 11-13",
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
      date: "May 14-16",
      img: "/Planets/planetVolunteer.svg",
      url: "https://2021.hackupc.com/",
    },
    {
      name: "2022",
      date: "April 21-May 1",
      img: "/Planets/planetVolunteer.svg",
      url: "https://2022.hackupc.com/",
    },
    {
      name: "2023",
      date: "May 12-14",
      img: "/Planets/planetVolunteer.svg",
      url: "https://2023.hackupc.com/",
    },
  ];

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
