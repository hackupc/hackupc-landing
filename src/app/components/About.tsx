import { useState, useEffect } from "react";
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
  SpacingXS,
} from "@/app/genericComponents/tokens";
import { Section } from "@/app/genericComponents/General";
import { lora } from "@/app/genericComponents/fonts";

const StyledImage = styled(Image)`
  width: 120px; /* Smaller width for the snake image */
  height: auto;

  @media (max-width: ${MobileBreakpoint}) {
    width: 180px;
  }
`;

const AppleImage = styled(Image)`
  padding-top: 8px;
  display: none;

  @media (max-width: ${MobileBreakpoint}) {
    display: block;
  }
`;

const SectionStyled = styled(Section)`
  color: ${"#000000"};
`;

const UnderlineTitle = styled(SectionTitle)`
  border-bottom: 3px solid black;
  width: 80%;
  padding-bottom: ${SpacingXS};
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/snake_0.svg",
    "/snake_1.svg",
    "/snake_2.svg",
    "/snake_3.svg",
    "/snake_4.svg",
    "/snake_5.svg",
    "/snake_6.svg",
    "/snake_7.svg",
    "/snake_8.svg",
    "/snake_7.svg",
    "/snake_8.svg",
    "/snake_7.svg",
    "/snake_8.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="about">
      <SectionStyled>
        <UnderlineTitle className={lora.className}>
          HACKUPC: CODING TO THE NEXT LEVEL
        </UnderlineTitle>
        <Container>
          <Col>
            <ImgSection>
              <StyledImage
                src={images[currentImageIndex]}
                width={120}
                height={120}
                alt="Snake"
              />
            </ImgSection>
            <BlockTitle color={"#000000"} haveMargin>
              What is a hackathon?
            </BlockTitle>
            <Body>
              The word hackathon is a combination of the words <b>"HACK"</b>,
              standing for creative problem-solving, and <b>"MARATHON"</b>.
              These are awesome events full of creativity, technology, and
              passionate tech-related students of different skill ranges
              collaborating and creating. During a certain period of time,
              attendees work in <b>TEAMS</b> to develop apps, games, robots…
              literally anything you want to <b>BUILD & LEARN</b> about!
            </Body>
          </Col>
          <Col>
            <ImgSection>
              <StyledImage
                src="/hackupcLogoBlack.svg"
                width={120}
                height={120}
                alt="HackUPC Logo"
              />
            </ImgSection>
            <BlockTitle color={"#000000"} haveMargin>
              About HackUPC
            </BlockTitle>
            <Body>
              HackUPC is the first student hackathon in Spain and the biggest
              one in Europe. Once a year, we aim to provide participants of{" "}
              <b>all experience levels</b> from <b>all around the world</b>{" "}
              with a space where they can improve and learn new skills, meet
              amazing people, and have an overall great experience!
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
    </div>
  );
}
