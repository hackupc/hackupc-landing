import { useState, useEffect } from 'react';
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
import { silkscreen } from "@/app/genericComponents/fonts";

const StyledImage = styled(Image)`
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/snake_0.svg',
    '/snake_1.svg',
    '/snake_2.svg',
    '/snake_3.svg',
    '/snake_4.svg',
    '/snake_5.svg',
    '/snake_6.svg',
    '/snake_7.svg',
    '/snake_8.svg',
    '/snake_7.svg',
    '/snake_8.svg',
    '/snake_7.svg',
    '/snake_8.svg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="about">
      <SectionBackground specialBackground={"#99C11C"}>
        <SectionStyled>
          <UnderlineTitle className={silkscreen.className}>HACKUPC: CODING TO THE NEXT LEVEL</UnderlineTitle>
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
                The word hackathon is a combination of the words "HACK",
                standing for creative problem-solving, and "MARATHON". These are
                awesome events full of creativity, technology, and passionate
                tech-related students of different skill ranges collaborating
                and creating. During a certain period of time, attendees work in
                teams to develop apps, games, robots… literally anything you
                want to build & learn about!
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
                HackUPC is the first student hackathon in Spain. Once a year, we
                aim to provide a space for students of all experience levels
                from all around the world where they can improve and learn new
                skills, meet awesome people, and overall have a great
                experience! This year's edition will be the first since the
                pandemic to have a FULLY IN-PERSON format, meaning that you can
                only participate by physically attending the event.
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