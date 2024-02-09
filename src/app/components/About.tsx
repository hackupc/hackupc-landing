import styled from "styled-components";
import Image from "next/image";
import { Body, SectionTitle, BlockTitle } from "@/app/genericComponents/Fonts";
import {
  MobileBreakpoint,
  Primary500,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { Section, SectionBackground } from "@/app/genericComponents/General";

const SectionStyled = styled(Section)`
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
const Col = styled.div`
  flex: 1
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
`;

const Smoke = styled(Image)`
  width: 100%;
  height: auto;
`;
const FixedSmoke = styled(Smoke)`
  margin-bottom:-5px;
`;

export default function About() {
  return (
    <div>
      <FixedSmoke
        src="/smoke_start.svg"
        width={1000}
        height={1000}
        alt="Rocket Smoke"
      />
      <SectionBackground specialBackground={"rgba(234, 247, 255, 1)"}>
        <SectionStyled>
          <SectionTitle>HackUPC beyond the stars</SectionTitle>
          <Container>
            <Col>
              <ImgSection>
                <Image
                  src="/saturnPlanet.svg"
                  width={110}
                  height={110}
                  alt="Saturn Planet"
                />
              </ImgSection>
              <BlockTitle color={Primary500} haveMargin>
                What is a hackathon?
              </BlockTitle>
              <Body>
                The word hackathon is a combination of the words "<b>HACK</b>",
                standing for creative problem-solving, and "<b>MARATHON</b>".
                These are awesome events full of creativity, technology, and
                passionate tech-related students of different skill levels
                collaborating and creating. During a certain period of time,
                attendees work in <b>TEAMS</b> to develop apps, games, robots…
                literally anything you want to <b>BUILD & LEARN</b> about!
              </Body>
            </Col>
            <Col>
              <ImgSection>
                <Image
                  src="/hackupcLogo.svg"
                  width={90}
                  height={90}
                  alt="HackUPC Logo"
                />
              </ImgSection>
              <BlockTitle color={Primary500} haveMargin>
                About HackUPC
              </BlockTitle>
              <Body>
                HackUPC is the first student hackathon in Spain. Once a year, we
                aim to provide students of <b>all experience levels</b> from{" "}
                <b>all around the world</b> with a space where they can improve
                and learn new skills, meet awesome people, and have an overall
                great experience!
              </Body>
            </Col>
          </Container>
        </SectionStyled>
      </SectionBackground>
      <Smoke
        src="/smoke_end.svg"
        width={1000}
        height={1000}
        alt="Rocket Smoke"
      />
    </div>
  );
}
