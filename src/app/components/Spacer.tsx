import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitch,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { BlockTitle, SectionTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  Secondary500,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";


const SpacerBackground = styled(SectionBackground)`
    background-image: url("/spacer.svg");
    background-size: auto 100%;
    background-repeat: repeat-x;
    background-position: center; // remove this is want to clamp on left
    height: 120px;
    width: 100%;
`;

export default function Spacer() {
  return (
        <SpacerBackground />
  );
}
