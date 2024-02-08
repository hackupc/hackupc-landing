import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faMedium,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Section } from "@/app/genericComponents/General";
import { BlockTitle, SectionTitle } from "@/app/genericComponents/Fonts";
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
const StyledBlockTitle = styled(BlockTitle)`
  margin-bottom: 0;
  text-align: center;
`;
const Subtitle = styled.div`
  display: flex;
  gap: ${SpacingS};
  margin-bottom: ${SpacingM};
  justify-content: center;
  align-items: center;
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
  max-width: 1000px;
`;

const SocialItem = styled.div`
  text-align: center;
`;

export default function Socials() {
  return (
    <Section>
      <StyledSectionTitle>Stay tuned, and don't miss a bit</StyledSectionTitle>
      <Subtitle>
        <StyledBlockTitle color={Secondary500}>
          Check our social media networks
        </StyledBlockTitle>
        <Image src="/telescope.svg" alt="Telescope" width={40} height={40} />
      </Subtitle>

      <SocialsList>
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
    </Section>
  );
}
