import { Section } from "@/app/genericComponents/General";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import { Body, BodyLink } from "@/app/genericComponents/Typography";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
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

const SocialsAndOthers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${SpacingM} 0;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    gap: ${SpacingS};
  }
`;

const BodyLinkYellow = styled(BodyLink)`
  color: #fcfc01;

  &:hover {
    color: #0060bf;
  }
`;

const SocialsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${SpacingS};
`;

export default function Footer() {
  return (
    <Section>
      <BodyLinkYellow
        href="https://2024.hackupc.com/"
        target="_blank"
        rel="noreferrer"
      >
        2024 site
      </BodyLinkYellow>
      <SocialsAndOthers>
        <SocialsBlock>
          <a
            href="mailto:contact@hackupc.com"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a
            href="https://twitter.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/hackupc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://linkedin.com/company/hack-upc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            href="https://www.twitch.tv/hackersupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <FontAwesomeIcon icon={faTwitch} size="lg" />
          </a>
          <a
            href="https://medium.com/@hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <FontAwesomeIcon icon={faMedium} size="lg" />
          </a>
          <a
            href="https://github.com/hackupc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </SocialsBlock>
        <Body>
          <BodyLinkYellow
            href="https://hacknights.dev/"
            target="_blank"
            rel="noreferrer"
          >
            HackNights
          </BodyLinkYellow>{" "}
          |{" "}
          <BodyLinkYellow
            href="https://hackersatupc.org/"
            target="_blank"
            rel="noreferrer"
          >
            Hackers@UPC
          </BodyLinkYellow>
        </Body>
      </SocialsAndOthers>
      <Body style={{ textAlign: "center" }}>
        <BodyLinkYellow
          href="https://legal.hackersatupc.org/hackupc/terms_and_conditions"
          target="_blank"
          rel="noreferrer"
        >
          Terms and conditions
        </BodyLinkYellow>{" "}
        |{" "}
        <BodyLinkYellow
          href="https://legal.hackersatupc.org/hackupc/legal_notice"
          target="_blank"
          rel="noreferrer"
        >
          Legal notice
        </BodyLinkYellow>{" "}
        |{" "}
        <BodyLinkYellow
          href="https://legal.hackersatupc.org/hackupc/privacy_and_cookies"
          target="_blank"
          rel="noreferrer"
        >
          Privacy and cookies
        </BodyLinkYellow>
      </Body>
      <Body style={{ marginTop: SpacingXS }}>
        Made with ❤️ by{" "}
        <BodyLinkYellow
          href="https://hackersatupc.org/"
          target="_blank"
          rel="noreferrer"
        >
          Hackers@UPC
        </BodyLinkYellow>
      </Body>
    </Section>
  );
}
