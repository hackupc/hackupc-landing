import styled from "styled-components";
import React from "react";

const Title = styled.h1``;
const Section = styled.div`
  align-content: center;
  text-align: center;
`;
const Description = styled.p`
  padding: 10px;
`;
const Button = styled.a`
  padding: 10px;
  border-radius: 10px;
`;

const Image = styled.img`
  width: ${(props) => props.width || "15%"};
`;

export default function Hackers() {
  return (
    <Section>
      <Title>The organization behind HackUPC</Title>

      <Description>
        Hackers@UPC is a non-profit student organization at Universitat
        Politècnica de Catalunya.
      </Description>

      <Image
        src="/hackersatupc.png"
        alt="Logotype of HackersAtUPC"
        width="35%"
      />

      <Description>
        Throughout the year, we organize national and international events in
        order to promote science and technology among students and create a
        great community in the technological world.
      </Description>
      <Description>
        Our mission is to foster learning, designing, and building to turn
        students' ideas into a reality!
      </Description>
      <Button href="https://hackersatupc.org">Go to website</Button>
    </Section>
  );
}
