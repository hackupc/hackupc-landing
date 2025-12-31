import styled from "styled-components";
import React from "react";
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
import { Section } from "@/app/genericComponents/General";
import { BlockTitle, SectionTitle } from "@/app/genericComponents/Typography";
import { lora } from "@/app/genericComponents/fonts";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: ${SpacingS};
`;
const Subtitle = styled.div`
  display: flex;
  gap: ${SpacingS};
  margin-bottom: ${SpacingM};
  align-items: center;
  text-align: center;
  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column-reverse;
    gap: ${SpacingXS};
  }
`;
const SocialsList = styled.div`
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${SpacingM};
  justify-content: space-around;
  padding: ${SpacingXS} ${SpacingS};
  @media (max-width: ${MobileBreakpoint}) {
    gap: ${SpacingXS};
    padding: 0 ${SpacingXS};
  }
`;

const SocialItem = styled.div`
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: ${MobileBreakpoint}) {
    transform: scale(0.8);
  }
`;

const Colors = {
  HeroYellow: "#FCFC01",
  HeroBlue: "#0060BF",
  HeroNeutral: "#231F20",
  HeroBlack: "#000000",
  HeroBlack80: "rgba(0, 0, 0, 0.8)",
};

const BlueContainer = styled.div`
  border: 2px solid ${Colors.HeroBlue};
  border-radius: 8px;
  padding: ${SpacingM};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function Socials() {
  return (
    <Section id="socials">
      <BlueContainer>
        <StyledSectionTitle className={lora.className}>
          Stay tuned, and don't miss a bit
        </StyledSectionTitle>
        <Subtitle>
          <BlockTitle color={Colors.HeroBlue}>
            Check our social media networks
          </BlockTitle>
        </Subtitle>

        <SocialsList>
          <SocialItem>
            <a
              href="mailto:contact@hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://twitter.com/hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.instagram.com/hackupc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.facebook.com/hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://linkedin.com/company/hack-upc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.twitch.tv/hackersupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faTwitch} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://medium.com/@hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <FontAwesomeIcon icon={faMedium} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://github.com/hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </SocialItem>
        </SocialsList>
      </BlueContainer>
    </Section>
  );
}
