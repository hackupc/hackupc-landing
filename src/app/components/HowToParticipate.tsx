import React from "react";
import Image from "next/image";
import styled from "styled-components";
import {
  Body,
  BlockTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint, MobileTitleL,
  Primary100,
  Secondary500,
  SpacingM,
  SpacingS,
  SpacingXL, TitleL,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import {
  PrimaryButton,
  PrimaryOutlineButton, SecondaryButton,
  SecondaryOutlineButton,
} from "@/app/genericComponents/Buttons";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${SpacingXL};
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

const RoleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${SpacingM};
  border: 3px dashed;
  border-radius: 10px;
  min-height: 250px;
  justify-content: space-between;
`;

const ImageIcon = styled(Image)`
  width: 50px;
  height: 50px;
  margin-bottom: ${SpacingS};
`;

const SpecialSection = styled(Section)`
    background: black;
`

export const HowToTitle = styled.div`
  font-size: ${TitleL};
  border: 3px dashed;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
  width: fit-content;
  margin: 0 auto ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

const Text = styled(Body)`
  margin-bottom: auto;
`;



export default function HowToParticipate() {
  return (
      <SpecialSection id="howtoparticipate">
        <HowToTitle>How to Participate</HowToTitle>
        <GridContainer>
          <RoleBlock>
            <ImageIcon src="greenAlien.svg" alt="Mentor" width={50} height={50} />
            <BlockTitle color={Secondary500} haveMargin>Mentor</BlockTitle>
            <Text>
              Help and motivate hackers with your knowledge. Either because you are passionate about it, or if you've graduated more than a year ago and can't participate as a hacker, apply now as a mentor!
            </Text>
            <PrimaryButton href="https://my.hackupc.com/user/signup/mentor/">Apply Now</PrimaryButton>
          </RoleBlock>

          <RoleBlock>
            <ImageIcon src="blueAlien.svg" alt="Volunteer" width={50} height={50} />
            <BlockTitle color={Primary100} haveMargin>Volunteer</BlockTitle>
            <Text>
              Volunteers make HackUPC possible by assisting the hackers and preparing the event. By joining our team of volunteers, you will get to know how this amazing event works from the inside, meet amazing people and live a great experience!
            </Text>
            <SecondaryButton href="https://my.hackupc.com/user/signup/volunteer/">Apply now</SecondaryButton>
          </RoleBlock>

          <RoleBlock>
            <ImageIcon src="yellowAlien.svg" alt="Partner" width={50} height={50} />
            <BlockTitle color={Secondary500} haveMargin>Partner</BlockTitle>
            <Text>
              Gain visibility for your brand, introduce your products to future talents. Join us and be remembered as part of this hackathon by our participants!
            </Text>
            <SecondaryOutlineButton href="mailto:logistics@hackupc.com">Contact us</SecondaryOutlineButton>
          </RoleBlock>

          <RoleBlock>
            <ImageIcon src="redAlien.svg" alt="Sponsor" width={50} height={50} />
            <BlockTitle color={Primary100} haveMargin>Sponsor</BlockTitle>
            <Text>
              Don't just put your brand on another wall. Take the chance to shape the tech scene of tomorrow by adding real value and making it possible for hackers to build something they're proud of.
            </Text>
            <PrimaryOutlineButton href="mailto:sponsor@hackupc.com">Contact us</PrimaryOutlineButton>
          </RoleBlock>
        </GridContainer>
      </SpecialSection>
  );
}