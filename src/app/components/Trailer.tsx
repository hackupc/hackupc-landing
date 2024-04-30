import styled from "styled-components";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryOutlineButton,
} from "@/app/genericComponents/Buttons";
import { silom } from "@/app/genericComponents/fonts";
import React from "react";

const VideoWrapper = styled.div`
  position: relative;
  width: 80%;
  padding-top: 45%;
  aspect-ratio: 16 / 9;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    padding-top: 56.25%;
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${SpacingS};
  border: none;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: ${SpacingM};
  gap: ${SpacingS};
  width: 100%;
`;

/*const shimmerAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`;

const VideoNotAvailable = styled.div`
  padding: ${SpacingXL};
  background-color: ${Neutral500};
  text-align: center;
  border-radius: ${SpacingS};
  position: relative;
  overflow: hidden;
  color: ${Neutral300};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(35, 47, 52, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(35, 47, 52, 0) 100%
    );
    animation: ${shimmerAnimation} 3s infinite linear;
  }
`; */

export default function Trailer() {
  return (
    <SectionBackground haveBackground id="trailer">
      <Section>
        <SectionTitle>Teaser</SectionTitle>
        {/* <VideoNotAvailable> Teaser coming soon... </VideoNotAvailable> */}
        <VideoWrapper>
          <StyledIframe
            title="HackUPC 2024 | Trailer"
            src="https://www.youtube.com/embed/iDinGlzSpbI?si=ZzSusoVrzekuuanx"
            allowFullScreen
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper>
        <ButtonContainer className={silom.className}>
          <SecondaryOutlineButton disabled>
            Applications Closed
          </SecondaryOutlineButton>
        </ButtonContainer>
      </Section>
    </SectionBackground>
  );
}
