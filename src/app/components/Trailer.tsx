import styled, { keyframes } from "styled-components";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { silkscreen } from "@/app/genericComponents/fonts";
import React from "react";
import Image from "next/image";

// const VideoWrapper = styled.div`
//   position: relative;
//   width: 80%;
//   padding-top: 45%;
//   aspect-ratio: 16 / 9;

//   @media (max-width: ${MobileBreakpoint}) {
//     width: 100%;
//     padding-top: 56.25%;
//   }
// `;

// const StyledIframe = styled.iframe`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: ${SpacingS};
//   border: none;
//   overflow: hidden;
// `;



const shimmerAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`;

const VideoNotAvailable = styled.div`
  padding: 120px;
  @media (max-width: ${MobileBreakpoint}) {
    padding: 60px;
  }
  background-color: #00A0B0;
  text-align: center;
  border-radius: ${SpacingS};
  position: relative;
  overflow: hidden;
  color: black;
  font-weight: bold;
  

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
`; 

const ConsolePlayer = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  background-color: #594F4F;
  
  
`;

const InnerConsole = styled.div`
background-color: #F4EAD5;
border-radius: 15px;
padding: 20px;
// center the content
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`;

const StyledButtons = styled(Image)`
@media (max-width: ${MobileBreakpoint}) {
  width: 90%;
}
  width: 80%;
  `;

const CustomTitle = styled(SectionTitle)`
color: #000;
`;

export default function Trailer() {
  return (
    <SectionBackground specialBackground="#231F20"> 
      <Section className={silkscreen.className}>

      <ConsolePlayer>
        <InnerConsole>

        <CustomTitle className={silkscreen.className}>Teaser</CustomTitle>
        <VideoNotAvailable> Teaser coming soon... </VideoNotAvailable>
        {/* <VideoWrapper>
          <StyledIframe
          title="HackUPC 2024 | Trailer"
          src="https://www.youtube.com/embed/iDinGlzSpbI?si=ZzSusoVrzekuuanx"
          allowFullScreenspecialBackground
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
          </VideoWrapper> */}
        
          <StyledButtons src="/console_buttons.svg" alt="console buttons" width={420} height={120} />
          </InnerConsole>
        </ConsolePlayer>
      </Section>
    </SectionBackground>
  );
}
