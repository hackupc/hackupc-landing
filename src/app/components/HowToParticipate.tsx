import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

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

const SectionTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 4rem;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 4rem;
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
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 1000px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.color || "#000"};
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === "#D9AFFF" ? "#240059" : "#fff")};
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const Text = styled.p`
  width: 50%;
  margin-bottom: 1rem;
`;

export default function HowToParticipate() {
  return (
    <div>
      <SectionTitle>How to participate</SectionTitle>
      <Section>
        <ImageButton href="https://mentorApplication.com">
          <Image src="/planetMentor.svg" alt="altText" width="15" height="15" />
        </ImageButton>
        <TextContainer>
          <Title color="#E23532">Mentor</Title>
          <Text>
            Help and motivate hackers with your knowledge. Either because you
            are passionate about it, or if you've graduated more than a year ago
            and can't participate as a hacker, apply now as a mentor!
          </Text>
          <Button color="#E23532">Apply as Mentor</Button>
        </TextContainer>
      </Section>

      <Section style={{ flexDirection: "row-reverse" }}>
        <ImageButton href="https://volunteerApplication.com">
          <Image
            src="/planetVolunteer.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <Title color="#D9AFFF">Volunteer</Title>
          <Text>
            Volunteers make HackUPC possible by assisting the hackers and
            preparing the event. By joining our team of volunteers, you will get
            to know how this amazing event works from the inside, meet amazing
            people and live a great experience!
          </Text>
          <Button color="#D9AFFF">Apply as Volunteer</Button>
        </TextContainer>
      </Section>

      <Section>
        <ImageButton href="https://partnerMail.com">
          <Image
            src="/planetPartner.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <Title color="#E23532">Partner</Title>
          <Text>
            Gain visibility for your brand, introduce your products to future
            talents. Join us and be remembered as part of this hackathon by our
            participants!
          </Text>
          <Button color="#E23532">Apply as Partner</Button>
        </TextContainer>
      </Section>

      <Section style={{ flexDirection: "row-reverse" }}>
        <ImageButton href="https://sponsorMail.com">
          <Image
            src="/planetSponsor.svg"
            alt="altText"
            width="15"
            height="15"
          />
        </ImageButton>
        <TextContainer>
          <Title color="#D9AFFF">Sponsor</Title>
          <Text>
            Don't just put your brand on another wall. Take the chance to shape
            the tech scene of tomorrow by adding real value and making it
            possible for hackers to build something they're proud of.
          </Text>
          <Button color="#D9AFFF">Apply as Sponsor</Button>
        </TextContainer>
      </Section>
    </div>
  );
}
