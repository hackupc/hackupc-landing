import styled from "styled-components";
import Image from "next/image";
import {
  Body,
  SectionTitle,
  BlockTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { Section, SectionBackground } from "@/app/genericComponents/General";


const SnakeImage = styled(Image)`
  width: 120px; /* Smaller width for the snake image */
  height: auto;

  @media (max-width: ${MobileBreakpoint}) {
    width: 180px; /* Original size for mobile */
  }
`;

const AppleImage = styled(Image)`
  padding-top:  8px;
  display: none; /* Hide by default */

  @media (max-width: ${MobileBreakpoint}) {
    display: block; /* Show for mobile */
  }
`;

const SectionStyled = styled(Section)`
  color: ${"#000000"};
  padding-bottom: 50px;
`;

const UnderlineTitle = styled(SectionTitle)`
  border-bottom: 3px solid black;
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  border: 3px solid black;
  flex-direction: row;
  gap: ${SpacingM};
  padding: 20px;


  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
  }
`;
const Col = styled.div`
  flex: 1;
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
`;



export default function About() {
  return (
    <div id="about">
      <SectionBackground specialBackground={"#99C11C"}>
        <SectionStyled>
          <UnderlineTitle>About HackUPC</UnderlineTitle>
          <Container>
            <Col>
              <ImgSection>
                <SnakeImage
                  src="/snake.png"
                  width={172}
                  height={172}
                  alt="Snake"
                />
              </ImgSection>
              <BlockTitle color={"#000000"} haveMargin>
                What is a hackathon?
              </BlockTitle>
              <Body>
                The word hackathon is a combination of the words "HACK",
                standing for creative problem-solving, and "MARATHON".
                These are awesome events full of creativity, technology, and
                passionate tech-related students of different skill ranges
                collaborating and creating. During a certain period of time,
                attendees work in teams to develop apps, games, robots…
                literally anything you want to build & learn about!
              </Body>
            </Col>
            <Col>
              <ImgSection>
                <Image
                  src="/hackupcLogoBlack.svg"
                  width={95}
                  height={95}
                  alt="HackUPC Logo"
                />
              </ImgSection>
              <BlockTitle color={"#000000"} haveMargin>
              HackUPC: Coding to the next level
              </BlockTitle>
              <Body>
              HackUPC is the first student hackathon in Spain. Once a year, we aim to provide
              a space for students of all experience levels from all around the world where they
              can improve and learn new skills, meet awesome people, and overall have a great 
              experience! This year's edition will be the first since the pandemic to have a
              FULLY IN-PERSON format, meaning that you can only participate by physically
              attending the event.
              </Body>
              <ImgSection>
                <AppleImage
                  src="/apple.png"
                  width={28}
                  height={30}
                  alt="manzana snake"
                /> 
              </ImgSection>
            </Col>
          </Container>
        </SectionStyled>
      </SectionBackground>
    </div>
  );
}
