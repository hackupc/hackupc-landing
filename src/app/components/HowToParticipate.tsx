import React from "react";
import styled from "styled-components";
import { Body, SectionTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingL,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import { SecondaryButton } from "@/app/genericComponents/Buttons";
import { lora, montserrat } from "@/app/genericComponents/fonts";

const SpecialSection = styled.div`
  margin: 0;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  position: relative;
  z-index: 0;
  padding: ${SpacingL} 0;
`;

const HowToTitle = styled(SectionTitle)`
  text-align: center;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 40px;
  line-height: 1.2;
  font-size: 36px;
  font-weight: 400;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 30px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${SpacingM};
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    gap: ${SpacingM};
    max-width: 100%;
    padding: 0 ${SpacingS};
    align-items: center;
  }
`;

const PennantWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: ${MobileBreakpoint}) {
    max-width: 320px;
  }
`;

const PennantSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 25px 100px;

  @media (max-width: ${MobileBreakpoint}) {
    padding: 20px 20px 90px;
  }
`;

const RoleTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
  margin: 0 0 8px 0;
`;

const Text = styled(Body)`
  color: #000000;
  line-height: 1.25;
  margin: 0 0 16px 0;
  font-size: 17px;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 15px;
  }
`;

const ApplyButton = styled(SecondaryButton)`
  background-color: rgba(255, 255, 255, 0.4);
  color: #000000;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 28px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  margin-top: auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 18px;
    padding: 8px 24px;
  }
`;

// Swallowtail pennant SVG component
interface PennantProps {
  color: string;
}

const Pennant: React.FC<PennantProps> = ({ color }) => (
  <PennantSvg
    viewBox="0 0 341 382"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="shadow" x="0" y="0" width="100%" height="100%">
        <feOffset dx="0" dy="4" in="SourceAlpha" result="offsetblur" />
        <feComponentTransfer in="offsetblur" result="shadow">
          <feFuncA type="linear" slope="1" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      <path d="M4 0H333V293L333 370L168.5 293L4 370L4 293V0Z" fill={color} />
    </g>
  </PennantSvg>
);

export default function HowToParticipate() {
  return (
    <SpecialSection>
      <Section id="howtoparticipate">
        <HowToTitle className={lora.className}>
          How to
          <br />
          Participate
        </HowToTitle>
        <GridContainer>
          <PennantWrapper>
            <Pennant color="#A36FAE" />
            <CardContent>
              <RoleTitle className={montserrat.className}>Mentor</RoleTitle>
              <Text className={montserrat.className}>
                Help and motivate hackers with your knowledge! If you are
                passionate about helping, and you can no longer apply as a
                hacker, we invite you to live the hackathon experience from the
                other side: Apply as a mentor!
              </Text>
              <ApplyButton
                className={montserrat.className}
                href="https://my.hackupc.com/user/signup/mentor/"
                target="_blank"
              >
                Apply Now
              </ApplyButton>
            </CardContent>
          </PennantWrapper>

          <PennantWrapper>
            <Pennant color="#B85353" />
            <CardContent>
              <RoleTitle className={montserrat.className}>Volunteer</RoleTitle>
              <Text className={montserrat.className}>
                Volunteers make HackUPC possible by assisting the hackers and
                preparing the event. By joining our team of volunteers, you will
                get to know how this incredible event works from the inside,
                meet amazing people and live a great experience!
              </Text>
              <ApplyButton
                className={montserrat.className}
                href="https://my.hackupc.com/user/signup/volunteer/"
                target="_blank"
              >
                Apply now
              </ApplyButton>
            </CardContent>
          </PennantWrapper>

          <PennantWrapper>
            <Pennant color="#3880B1" />
            <CardContent>
              <RoleTitle className={montserrat.className}>Partner</RoleTitle>
              <Text className={montserrat.className}>
                Gain visibility for your brand, introduce your products to
                future talents. Join us and be remembered as part of this
                hackathon by our participants!
              </Text>
              <ApplyButton
                className={montserrat.className}
                href="mailto:logistics@hackupc.com"
              >
                Contact us
              </ApplyButton>
            </CardContent>
          </PennantWrapper>

          <PennantWrapper>
            <Pennant color="#75AA7E" />
            <CardContent>
              <RoleTitle className={montserrat.className}>Sponsor</RoleTitle>
              <Text className={montserrat.className}>
                Don't just put your brand on another wall. Take the chance to
                shape the tech scene of tomorrow by adding real value and making
                it possible for hackers to build something they're proud of.
              </Text>
              <ApplyButton
                className={montserrat.className}
                href="mailto:sponsor@hackupc.com"
              >
                Contact us
              </ApplyButton>
            </CardContent>
          </PennantWrapper>
        </GridContainer>
      </Section>
    </SpecialSection>
  );
}
