import styled from "styled-components";
import Image from "next/image";
import { Body, SectionTitle, BlockTitle } from "@/app/genericComponents/Fonts";
import {
  MobileBreakpoint,
  Primary500,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";

const SectionStyled = styled(Section)`
  background-color: rgba(234, 247, 255, 0.9);
  color: ${Primary500};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
  }
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
`;

export default function About() {
  return (
    <SectionStyled>
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
          <BlockTitle color={Primary500}>What is a hackathon?</BlockTitle>
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
          <BlockTitle color={Primary500}>About HackUPC?</BlockTitle>
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
    </SectionStyled>
  );
}
