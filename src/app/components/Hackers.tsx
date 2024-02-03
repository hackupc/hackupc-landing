import styled from "styled-components";
import React from "react";

const Title = styled.h1`
  font-size: 44px;
`;
const Section = styled.div`
  align-content: center;
  text-align: center;
  background-color: #12042ab3;
`;
const Description = styled.p`
  padding: 10px;
  font-size: 28px;
`;
const Button = styled.a`
  padding: 10px 24px 10px 24px;
  border-radius: 10px;
  background-color: #c379e0;
  display: inline-block;
  margin-top: 30px;
`;

const Image = styled.img`
  margin-top: 50px;
  margin-bottom: 50px;
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
        src="/hackersatupc.svg"
        alt="Logotype of HackersAtUPC"
        width="375px"
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
