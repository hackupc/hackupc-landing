import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Body, Title1, Title2 } from "@/app/genericComponents/Fonts";
import {
  Mobile,
  PrimaryColor,
  SecondaryColor,
} from "@/app/genericComponents/constants";
import { GenericButton } from "@/app/genericComponents/Buttons";

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
  margin: 0 auto 4rem;
  gap: 100px;
  flex-direction: ${(props) => (props.imageLeft ? "row-reverse" : "row")};

  @media (max-width: ${Mobile}) {
    flex-direction: column;
    gap: 50px;
  }
`;

const ImageButton = styled.a`
  display: inline-block;
  width: 15%;
  margin-right: 20px; /* Adjust the margin as needed */
  animation: ${rotate} 3s infinite linear;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(2) rotate(360deg);
  }

  & > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${Mobile}) {
    width: 30%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  max-width: 1000px;

  @media (max-width: ${Mobile}) {
    width: 100%;
  }
`;

const Title = styled(Title2)`
  font-weight: bold;
  color: ${(props) => props.color || "#000"};
  margin-bottom: 1rem;
`;

const Text = styled(Body)`
  margin-bottom: 1rem;
`;

export default function HowToParticipate() {
  return (
    <div>
      <Title1>How to participate</Title1>
      <RoleBlock>
        <ImageButton
          href="https://my.hackupc.com/user/signup/mentor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/planetMentor.svg" alt="altText" width="15" height="15" />
        </ImageButton>
        <TextContainer>
          <Title color={PrimaryColor}>Mentor</Title>
          <Text>
            Help and motivate hackers with your knowledge. Either because you
            are passionate about it, or if you've graduated more than a year ago
            and can't participate as a hacker, apply now as a mentor!
          </Text>
          <a
            href="https://my.hackupc.com/user/signup/mentor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GenericButton color={PrimaryColor}>Apply as Mentor</GenericButton>
          </a>
        </TextContainer>
      </RoleBlock>

      <RoleBlock imageLeft>
        <ImageButton
          href="https://my.hackupc.com/user/signup/volunteer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/planetVolunteer.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <Title color={SecondaryColor}>Volunteer</Title>
          <Text>
            Volunteers make HackUPC possible by assisting the hackers and
            preparing the event. By joining our team of volunteers, you will get
            to know how this amazing event works from the inside, meet amazing
            people and live a great experience!
          </Text>
          <a
            href="https://my.hackupc.com/user/signup/volunteer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GenericButton color={SecondaryColor}>
              Apply as Volunteer
            </GenericButton>
          </a>
        </TextContainer>
      </RoleBlock>

      <RoleBlock>
        <ImageButton
          href="mailto:logistics@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/planetPartner.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <Title color={PrimaryColor}>Partner</Title>
          <Text>
            Gain visibility for your brand, introduce your products to future
            talents. Join us and be remembered as part of this hackathon by our
            participants!
          </Text>
          <a
            href="mailto:logistics@hackupc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GenericButton color={PrimaryColor}>Contact us</GenericButton>
          </a>
        </TextContainer>
      </RoleBlock>

      <RoleBlock imageLeft>
        <ImageButton
          href="mailto:sponsor@hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/planetSponsor.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <Title color={SecondaryColor}>Sponsor</Title>
          <Text>
            Don't just put your brand on another wall. Take the chance to shape
            the tech scene of tomorrow by adding real value and making it
            possible for hackers to build something they're proud of.
          </Text>
          <a
            href="mailto:sponsor@hackupc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GenericButton color={SecondaryColor}>Contact us</GenericButton>
          </a>
        </TextContainer>
      </RoleBlock>
    </div>
  );
}
