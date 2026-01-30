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
import { Section, WhiteContainer } from "@/app/genericComponents/General";
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
  font-weight: 500;
`;

const StyledBlockTitle = styled(BlockTitle)`
  font-weight: 300;
  font-size: 18px;
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

const SocialItem = styled.div`
  text-align: center;
  transition: transform 0.2s ease-in-out;
  z-index: 1;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: ${MobileBreakpoint}) {
    transform: scale(0.8);
  }
`;

const SocialsList = styled(WhiteContainer)`
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0);
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${SpacingM};
  justify-content: space-around;
  padding: ${SpacingXS} ${SpacingS};
  @media (max-width: ${MobileBreakpoint}) {
    gap: ${SpacingXS};
    padding: 0 ${SpacingXS};
  }
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
`;

const SocialImage = styled(FontAwesomeIcon)`
  color: rgba(91, 83, 64, 0.8);
`;

export default function Socials() {
  return (
    <Section id="socials">
      <WhiteContainer>
        <ImgSection>
          <Image
            src="/bieneDragon.svg"
            width={102}
            height={168}
            alt="Biene dragon"
          />
        </ImgSection>
        <StyledSectionTitle className={lora.className}>
          Stay tuned, and don't miss a bit
        </StyledSectionTitle>
        <Subtitle>
          <StyledBlockTitle color="black">
            Check our social media networks
          </StyledBlockTitle>
        </Subtitle>

        <SocialsList>
          <SocialItem>
            <a
              href="mailto:contact@hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <SocialImage icon={faEnvelope} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://twitter.com/hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <SocialImage icon={faXTwitter} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.instagram.com/hackupc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SocialImage icon={faInstagram} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.facebook.com/hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SocialImage icon={faFacebook} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://linkedin.com/company/hack-upc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <SocialImage icon={faLinkedin} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.youtube.com/channel/UCiiRorGg59Xd5Sjj9bjIt-g"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <SocialImage icon={faYoutube} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://www.twitch.tv/hackersupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <SocialImage icon={faTwitch} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://medium.com/@hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
            >
              <SocialImage icon={faMedium} size="3x" />
            </a>
          </SocialItem>
          <SocialItem>
            <a
              href="https://github.com/hackupc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <SocialImage icon={faGithub} size="3x" />
            </a>
          </SocialItem>
        </SocialsList>
      </WhiteContainer>
    </Section>
  );
}
