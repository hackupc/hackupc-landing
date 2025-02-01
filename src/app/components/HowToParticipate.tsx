import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Body, BlockTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  MobileTitleL,
  Secondary100,
  SpacingL,
  SpacingM,
  SpacingS,
  SpacingXXS,
  SpacingXL,
  TitleL,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import {
  SecondaryButton,
} from "@/app/genericComponents/Buttons";
import { silkscreen } from "@/app/genericComponents/fonts";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${SpacingXL};
  text-align: center;
  background-color: black;
  background-size:
    80px 80px,
    40px 40px,
    40px 40px,
    40px 40px,
    40px 40px;
  background-position:
    0 0,
    50% 50%,
    10% 10%,
    90% 10%,
    50% 90%;

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

const RoleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SpacingM};
  min-height: 250px;
  justify-content: space-between;
  position: relative;
  border: ${SpacingXXS} dashed;

  &:nth-child(1) {
    border-color: #77C914;
  }

  &:nth-child(2) {
    border-color: #5665FF;
  } 

  &:nth-child(3) {
    border-color: #FCAF01;
  }

  &:nth-child(4) {
    border-color: #FB3E01;
  }
`;

const SpecialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  gap: ${SpacingM};
  width: 100vw;
  background-color: black;
  position: relative;
  z-index: 0;
`;

const ImageIcon = styled(Image)`
  margin-bottom: ${SpacingS};
  &:hover {
    transform: scale(1.5);
  }
`;

const BlockImageTitle = styled.a`
  position: absolute;
  top: -25%;
  background-color: black;
  padding: ${SpacingS};
`;


const HowToTitle = styled.div`
  font-size: ${TitleL};
  padding: ${SpacingL};
  text-align: center;
  font-weight: bold;
  width: fit-content;
  margin: 0 auto ${SpacingL};
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20%; 
    height: 50%;
    border: 3px dashed;
  }

  &::before {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

const HowToTitleWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto ${SpacingXL};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50%; 
    height: 20%;
    border: 3px dashed;
  }

  &::before {
    top: 1%;
    left: 1%;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: 25%;
    right: 1%;
    border-left: none;
    border-top: none;
  }
`;

const Text = styled(Body)`
  position: relative;
  margin-top: 20%;
  
`;

const ColoredButton = styled(SecondaryButton)`
  background-color: ${(props) => props.color};
  color: white;

  &:hover {
    background-color: ${(props) => props.color};
    filter: brightness(0.75);
  }
`;


export default function HowToParticipate() {
  return (
    <SpecialSection>
      <Section id="howtoparticipate">
        <HowToTitleWrapper>
          <HowToTitle className={silkscreen.className}>
            How to<br/>Participate
          </HowToTitle>
        </HowToTitleWrapper>
        <GridContainer>
          <RoleBlock>
              <BlockImageTitle
                href="https://my.hackupc.com/user/signup/mentor/"
                target="_blank">
                <ImageIcon
                    src="greenAlien.svg"
                    alt="Mentor"
                    width={50}
                    height={50}
                />
                <BlockTitle
                  className={silkscreen.className}
                  color={Secondary100}
                  haveMargin
                >
                  Mentor
                </BlockTitle>
              </BlockImageTitle>
            <Text>
              Help and motivate hackers with your knowledge. Either because you
              are passionate about it, or if you've graduated more than a year
              ago and can't participate as a hacker, apply now as a mentor!
            </Text>
            <ColoredButton
              color="#77C914"
              className={silkscreen.className}
              href="https://my.hackupc.com/user/signup/mentor/"
              target="_blank"
            >
              Apply Now
            </ColoredButton>
          </RoleBlock>

          <RoleBlock>
            <BlockImageTitle
              href="https://my.hackupc.com/user/signup/volunteer/"
              target="_blank">
              <ImageIcon
                src="blueAlien.svg"
                alt="Volunteer"
                width={50}
                height={50}
              />
              <BlockTitle
                className={silkscreen.className}
                color={Secondary100}
                haveMargin
              >
                Volunteer
              </BlockTitle>
            </BlockImageTitle>
            <Text>
              Volunteers make HackUPC possible by assisting the hackers and
              preparing the event. By joining our team of volunteers, you will
              get to know how this amazing event works from the inside, meet
              amazing people and live a great experience!
            </Text>
            <ColoredButton
              color="#5665FF"
              className={silkscreen.className}
              href="https://my.hackupc.com/user/signup/volunteer/"
              target="_blank"
            >
              Apply now
            </ColoredButton>
          </RoleBlock>

          <RoleBlock>
            <BlockImageTitle
              href="mailto:logistics@hackupc.com">
              <ImageIcon
                src="yellowAlien.svg"
                alt="Partner"
                width={50}
                height={50}
              />
              <BlockTitle
                className={silkscreen.className}
                color={Secondary100}
                haveMargin
              >
                Partner
              </BlockTitle>
            </BlockImageTitle>
            <Text>
              Gain visibility for your brand, introduce your products to future
              talents. Join us and be remembered as part of this hackathon by
              our participants!
            </Text>
            <ColoredButton
              color="#FCAF01"
              className={silkscreen.className}
              href="mailto:logistics@hackupc.com"
            >
              Contact us
            </ColoredButton>
          </RoleBlock>

          <RoleBlock>
            <BlockImageTitle
              href="mailto:sponsor@hackupc.com">
              <ImageIcon
                src="redAlien.svg"
                alt="Sponsor"
                width={50}
                height={50}
              />
              <BlockTitle
                className={silkscreen.className}
                color={Secondary100}
                haveMargin
              >
                Sponsor
              </BlockTitle>
            </BlockImageTitle>
            <Text>
              Don't just put your brand on another wall. Take the chance to
              shape the tech scene of tomorrow by adding real value and making
              it possible for hackers to build something they're proud of.
            </Text>
            <ColoredButton
              color="#FB3E01"
              className={silkscreen.className}
              href="mailto:sponsor@hackupc.com"
            >
              Contact us
            </ColoredButton>
          </RoleBlock>
        </GridContainer>
      </Section>
    </SpecialSection>
  );
}
