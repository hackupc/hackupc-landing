import styled from "styled-components";
import Image from "next/image";
import { Body, SectionTitle, Title2 } from "@/app/genericComponents/Fonts";
import { Mobile } from "@/app/genericComponents/tokens";

const Section = styled.div`
  background-color: #eaf7ff;
  color: #240059;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;

  @media (max-width: ${Mobile}) {
    flex-direction: column;
    gap: 50px;
  }
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export default function About() {
  return (
    <Section>
      <SectionTitle>HackUPC beyond the stars</SectionTitle>
      <Container>
        <div>
          <ImgSection>
            <Image
              src="/saturnPlanet.svg"
              width={110}
              height={110}
              alt="Saturn Planet"
            />
          </ImgSection>
          <Title2>What is a hackathon?</Title2>
          <Body>
            The word hackathon is a combination of the words "<b>HACK</b>
            ", standing for creative problem-solving, and "<b>MARATHON</b>
            ". These are awesome events full of creativity, technology, and
            passionate tech-related students of different skill levels
            collaborating and creating. During a certain period of time,
            attendees work in <b>TEAMS</b> to develop apps, games, robots…
            literally anything you want to <b>BUILD & LEARN</b> about!
          </Body>
        </div>
        <div>
          <ImgSection>
            <Image
              src="/hackupcLogo.svg"
              width={90}
              height={90}
              alt="HackUPC Logo"
            />
          </ImgSection>
          <Title2>About HackUPC?</Title2>
          <Body>
            HackUPC is the first student hackathon in Spain. Once a year, we aim
            to provide a space for students of all experience levels from all
            around the world where they can improve and learn new skills, meet
            awesome people, and overall have a great experience! This year's
            edition will be the first since the pandemic to have a{" "}
            <b>FULLY IN-PERSON</b> format, meaning that you can only participate
            by physically attending the event.
          </Body>
        </div>
      </Container>
    </Section>
  );
}
