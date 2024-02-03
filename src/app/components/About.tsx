import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  padding: 20px;
  flex-basis: 50%;
`;

const Section = styled.div`
  background-color: #eaf7ff;
  color: #240059;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ImgSection = styled.div`
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-weight: bold;
`;

const Description = styled.p``;

export default function About() {
  return (
    <div>
      <Section>
        <div>
          <Title>HackUPC beyond the stars</Title>
        </div>
        <Container>
          <Card>
            <ImgSection>
              <Image
                src="/saturnPlanet.svg"
                width={110}
                height={110}
                alt="Saturn Planet"
              />
            </ImgSection>
            <Subtitle>What is a hackathon?</Subtitle>
            <Description>
              The word hackathon is a combination of the words "<b>HACK</b>
              ", standing for creative problem-solving, and "<b>MARATHON</b>
              ". These are awesome events full of creativity, technology, and
              passionate tech-related students of different skill levels
              collaborating and creating. During a certain period of time,
              attendees work in
              <b>TEAMS</b>
              to develop apps, games, robots… literally anything you want to{" "}
              <b>BUILD & LEARN</b>
              about!
            </Description>
          </Card>
          <Card>
            <ImgSection>
              <Image
                src="/hackupcLogo.svg"
                width={90}
                height={90}
                alt="HackUPC Logo"
              />
            </ImgSection>
            <Subtitle>About HackUPC?</Subtitle>
            <Description>
              HackUPC is the first student hackathon in Spain. Once a year, we
              aim to provide a space for students of all experience levels from
              all around the world where they can improve and learn new skills,
              meet awesome people, and overall have a great experience! This
              year's edition will be the first since the pandemic to have a
              <b>FULLY IN-PERSON</b>
              format, meaning that you can only participate by physically
              attending the event.
            </Description>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
