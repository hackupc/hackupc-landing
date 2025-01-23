import styled from "styled-components";
import Image from "next/image";
import {
  Body,
  SectionTitle,
  BlockTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  Primary500,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { Section, SectionBackground } from "@/app/genericComponents/General";

const SectionStyled = styled(Section)`
  color: ${"#000000"};
  padding-bottom: 0;
`;

const UnderlineTitle = styled(SectionTitle)`
  border-bottom: 3px solid black;
`;

const Container = styled.div`
  display: flex;
  border: 3px solid black;
  flex-direction: row;
  gap: ${SpacingM};

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

const Smoke = styled.img`
  width: 100%;
  height: auto;
  display: block;
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

const SmokeMobile = styled.img`
  display: none;
  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default function About() {
  return (
    <div id="about">
      <Smoke src="/smoke_start.svg" alt="Rocket Smoke" />
      <SmokeMobile src="/smoke_start_mobile.svg" alt="Rocket Smoke" />
      <SectionBackground specialBackground={"rgba(234,247,255,.85)"}>
        <SectionStyled>
          <UnderlineTitle>About HackUPC</UnderlineTitle>
          <Container>
            <Col>
              <ImgSection>
                <Image
                  src="/snake.svg"
                  width={180}
                  height={180}
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
                  width={110}
                  height={110}
                  alt="HackUPC Logo"
                />
              </ImgSection>
              <BlockTitle color={"#000000"} haveMargin>
                About HackUPC
              </BlockTitle>
              <Body>
                HackUPC is the first student hackathon in Spain. Once a year, we
                aim to provide participants of <b>all experience levels</b> from{" "}
                <b>all around the world</b> with a space where they can improve
                and learn new skills, meet amazing people, and have an overall
                great experience!
              </Body>
            </Col>
          </Container>
        </SectionStyled>
      </SectionBackground>
      <Smoke src="/smoke_end.svg" alt="Rocket Smoke" />
      <SmokeMobile src="/smoke_end_mobile.svg" alt="Rocket Smoke" />
    </div>
  );
}
