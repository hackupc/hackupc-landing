import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import {
  Body,
  SectionTitle,
  BlockTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  Primary100,
  Secondary500,
  SpacingL,
  SpacingS,
  SpacingXL,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import {
  PrimaryButton,
  PrimaryOutlineButton,
  SecondaryOutlineButton,
} from "@/app/genericComponents/Buttons";

const rotate = keyframes`
  0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-2deg);
  }
`;

const RoleBlock = styled.div<{ imageLeft?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${SpacingL};
  gap: ${SpacingXL};
  flex-direction: ${(props) => (props.imageLeft ? "row-reverse" : "row")};

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    gap: ${SpacingS};
  }
`;

const ImageButton = styled.a`
  display: inline-block;
  width: 20%;
  animation: ${rotate} 3s infinite linear;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(2) rotate(360deg);
  }

  & > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${MobileBreakpoint}) {
    width: 30%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
  }
`;

const Text = styled(Body)`
  margin-bottom: ${SpacingS};
`;

export default function HowToParticipate() {
  return (
    <Section id="howtoparticipate">
      <SectionTitle>How to participate</SectionTitle>
      <RoleBlock>
        <ImageButton
          //href="https://my.hackupc.com/user/signup/mentor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Planets/planetMentor.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <BlockTitle color={Secondary500} haveMargin>
            Mentor
          </BlockTitle>
          <Text>
            Help and motivate hackers with your knowledge. Either because you
            are passionate about it, or if you've graduated more than a year ago
            and can't participate as a hacker, apply now as a mentor!
          </Text>
          <SecondaryOutlineButton disabled>Closed</SecondaryOutlineButton>
        </TextContainer>
      </RoleBlock>

      <RoleBlock imageLeft>
        <ImageButton
          href="https://hackersatupc.typeform.com/to/pPdpTexb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Planets/planetVolunteer.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <BlockTitle color={Primary100} haveMargin>
            Volunteer
          </BlockTitle>
          <Text>
            Volunteers make HackUPC possible by assisting the hackers and
            preparing the event. By joining our team of volunteers, you will get
            to know how this amazing event works from the inside, meet amazing
            people and live a great experience!
          </Text>
          <PrimaryButton href="https://hackersatupc.typeform.com/to/pPdpTexb">
            Subscribe
          </PrimaryButton>
        </TextContainer>
      </RoleBlock>

      <RoleBlock>
        <ImageButton
          href="mailto:logistics@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Planets/planetPartner.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <BlockTitle color={Secondary500} haveMargin>
            Partner
          </BlockTitle>
          <Text>
            Gain visibility for your brand, introduce your products to future
            talents. Join us and be remembered as part of this hackathon by our
            participants!
          </Text>
          <SecondaryOutlineButton
            href="mailto:logistics@hackupc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </SecondaryOutlineButton>
        </TextContainer>
      </RoleBlock>

      <RoleBlock imageLeft>
        <ImageButton
          href="mailto:sponsor@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Planets/planetSponsor.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <BlockTitle color={Primary100} haveMargin>
            Sponsor
          </BlockTitle>
          <Text>
            Don't just put your brand on another wall. Take the chance to shape
            the tech scene of tomorrow by adding real value and making it
            possible for hackers to build something they're proud of.
          </Text>
          <PrimaryOutlineButton
            href="mailto:sponsor@hackupc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </PrimaryOutlineButton>
        </TextContainer>
      </RoleBlock>
    </Section>
  );
}
