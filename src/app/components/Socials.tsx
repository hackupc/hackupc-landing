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
import { BlockTitle, SectionTitle }from "@/app/genericComponents/Typography";
import { silkscreen } from "@/app/genericComponents/fonts";
import {
  MobileBreakpoint,
  Secondary500,
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
  transition: transform .2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: ${MobileBreakpoint}) {
    transform: scale(0.8);
  }
`;


const CustomImage = styled(Image)`
  margin-bottom: ${SpacingM};
  animation: blink 5s infinite;
  @keyframes blink {
    0% {
      content: url("/biene_ghost_2.svg");
    }
    30% {
      content: url("/biene_ghost_2.svg");
    }
    31% {
      content: url("/biene_ghost.svg");
    }
    100% {
      content: url("/biene_ghost.svg");
    }
  }
`;

const Colors = {
  HeroYellow: "#FCFC01",
  HeroBlue: "#0060BF",
  HeroNeutral: "#231F20",
  HeroBlack: "#000000",
  HeroBlack80: "rgba(0, 0, 0, 0.8)",
};

const CustomBackground = styled(SectionBackground)`
  width: 100vw;
  background-color: ${Colors.HeroNeutral};
  background-image: url("/background_piece.svg");
  background-repeat: repeat;
  background-size: 80px 80px;
`;

const BlueContainer = styled.div`
  background-color: ${Colors.HeroBlack80};
  border: 2px solid ${Colors.HeroBlue};
  border-radius: 8px;
  padding: ${SpacingM};
  margin-top: ${SpacingM};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function Socials() {
  return (
    <CustomBackground id="socials">
      <Section>
      <BlueContainer>
        <CustomImage
          src="/biene_ghost.svg"
          alt="Ghost Biene"
          width={102}
          height={168}
          
          />
        <StyledSectionTitle className={silkscreen.className}>
          Stay tuned, and don't miss a bit
        </StyledSectionTitle>
        <Subtitle>
          <BlockTitle color={Secondary500}>
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
    </CustomBackground>
  );
}
