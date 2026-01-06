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
import { Section, WhiteContainer } from "@/app/genericComponents/General";
import { lora, montserrat } from "@/app/genericComponents/fonts";

const SectionStyled = styled(Section)`
  color: ${"#000000"};
`;

const UnderlineTitle = styled(SectionTitle)`
  font-weight: normal;
  width: 100%;
  margin-bottom: 0px;
  flex-direction: column;
`;

const Container = styled(WhiteContainer)`
  flex-direction: row;
  gap: ${SpacingM};
  padding: 20px;
  flex-direction: column;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  flex: 1;
  margin: 15px;

  @media (max-width: ${MobileBreakpoint}) {
    margin: 5px;
  }
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: ${SpacingS};
`;

const RedBoulded = styled.b`
  color: #b85353;
`;

const GreenBoulded = styled.b`
  color: #75aa7e;
`;

export const AboutBody = styled(Body)`
  font-weight: 500;
  text-align: left;
`;

export default function About() {
  return (
    <div id="about">
      <SectionStyled>
        <Container className={montserrat.className}>
          <UnderlineTitle className={lora.className}>
            HackUPC:
            <br />
            code the legend
          </UnderlineTitle>
          <Sections>
            <Col>
              <ImgSection>
                <Image
                  src="/dragon.svg"
                  width={200}
                  height={200}
                  alt="Dragon"
                />
              </ImgSection>
              <BlockTitle color={"#000000"} haveMargin>
                What is a{" "}
                <span style={{ color: "#B85353", fontWeight: "bold" }}>
                  hackathon
                </span>
                ?
              </BlockTitle>
              <AboutBody>
                The word hackathon is a combination of the words "
                <RedBoulded>HACK</RedBoulded>", standing for creative
                problem-solving, and <RedBoulded>"MARATHON"</RedBoulded>. These
                are awesome events full of creativity, technology, and
                passionate tech-related students of different skill ranges
                collaborating and creating. During a certain period of time,
                attendees work in <RedBoulded>TEAMS</RedBoulded> to develop
                apps, games, robots… literally anything you want to{" "}
                <RedBoulded>BUILD & LEARN</RedBoulded> about!
              </AboutBody>
            </Col>
            <Col>
              <ImgSection style={{ margin: "25px", marginBottom: "41px" }}>
                {" "}
                {/* Extra margin to match the other image in sizes */}
                <Image
                  src="/hackupcLogoInGreenFlag.svg"
                  width={150}
                  height={150}
                  alt="HackUPC Logo"
                />
              </ImgSection>
              <BlockTitle color={"#000000"} haveMargin>
                About{" "}
                <span style={{ color: "#75AA7E", fontWeight: "bold" }}>
                  HackUPC
                </span>
              </BlockTitle>
              <AboutBody>
                <GreenBoulded>HackUPC</GreenBoulded> is the first student{" "}
                <GreenBoulded>hackathon</GreenBoulded> in Spain and the biggest
                one in Europe. Once a year, we aim to provide participants of
                <GreenBoulded> all experience levels</GreenBoulded> from{" "}
                <GreenBoulded>all around the world</GreenBoulded> with a space
                where they can{" "}
                <GreenBoulded>improve and learn new skills</GreenBoulded>,{" "}
                <GreenBoulded>meet amazing people</GreenBoulded>, and have a{" "}
                <GreenBoulded>great experience</GreenBoulded>!
              </AboutBody>
            </Col>
          </Sections>
        </Container>
      </SectionStyled>
    </div>
  );
}
