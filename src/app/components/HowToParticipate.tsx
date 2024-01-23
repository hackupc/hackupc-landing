import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: ${props => props.width || '15%'};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 30%;
`;

const Title = styled.h2`
  font-weight: bold;
  color: ${props => props.color || '#000'};
`;

const Button = styled.button`
  padding: 1rem;
  background-color: ${props => props.color || '#000'};
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default function HowToParticipate() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>How to participate</h1>
      
      <Section>
        <Image src="/planetMentor.svg" width="15%"/>
        <TextContainer>
          <Title color="#E23532">Mentor</Title>
          <p>Help and motivate hackers with your knowledge. Either because you are passionate about it, or if you've graduated more than a year ago and can't participate as a hacker, apply now as a mentor!</p>
          <Button color="#E23532">Apply as Mentor</Button>
        </TextContainer>
      </Section>

      <Section style={{ flexDirection: 'row-reverse' }}>
        <Image src="/planetVolunteer.svg" width="15%"/>
        <TextContainer>
          <Title color="#D9AFFF">Volunteer</Title>
          <p>Volunteers make HackUPC possible by assisting the hackers and preparing the event. By joining our team of volunteers, you will get to know how this amazing event works from the inside, meet amazing people and live a great experience!</p>
          <Button color="#D9AFFF">Apply as Volunteer</Button>
        </TextContainer>
      </Section>

      <Section>
        <Image src="/planetPartner.svg" width="15%"/>
        <TextContainer>
          <Title color="#E23532">Partner</Title>
          <p>Gain visibility for your brand, introduce your products to future talents. Join us and be remembered as part of this hackathon by our participants!</p>
          <Button color="#E23532">Apply as Partner</Button>
        </TextContainer>
      </Section>

      <Section style={{ flexDirection: 'row-reverse' }}>
        <Image src="/planetSponsor.svg" width="15%"/>
        <TextContainer>
          <Title color="#D9AFFF">Sponsor</Title>
          <p>Don't just put your brand on another wall. Take the chance to shape the tech scene of tomorrow by adding real value and making it possible for hackers to build something they're proud of.</p>
          <Button color="#D9AFFF">Apply as Sponsor</Button>
        </TextContainer>
      </Section>
    </div>
  );
}