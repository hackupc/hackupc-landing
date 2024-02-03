import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  padding: 10px;
`;

const Section = styled.div`
  background-color: #EAF7FF;
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
            <Image src="" width={50} height={50} alt="" />
          </ImgSection>
          <Subtitle>What is a hackathon?</Subtitle>
          <Description>
            The word hackathon is a combination of the words "HACK", standing
            for creative problem-solving, and "MARATHON". These are awesome
            events full of creativity, technology, and passionate tech-related
            students of different skill levels collaborating and creating.
            During a certain period of time, attendees work in TEAMS to develop
            apps, games, robots… literally anything you want to BUILD & LEARN
            about!
          </Description>
        </Card>
        <Card>
          <ImgSection>
            <Image src="" width={50} height={50} alt="" />
          </ImgSection>
          <Subtitle>About HackUPC?</Subtitle>
          <Description>
            HackUPC is the first student hackathon in Spain. Once a year, we aim
            to provide a space for students of all experience levels from all
            around the world where they can improve and learn new skills, meet
            awesome people, and overall have a great experience! This year's
            edition will be the first since the pandemic to have a FULLY
            IN-PERSON format, meaning that you can only participate by
            physically attending the event.
          </Description>
        </Card>
      </Container>
      </Section>
    </div>
  );
}
