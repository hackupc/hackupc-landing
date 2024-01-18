import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const Col = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Description = styled.div`
  font-size: 20px;
`;

export default function Provide() {
  return (
    <Container>
      <Col>
        <Image src="" width={50} height={50} alt="" />
        <Title>Food</Title>
        <Description>
          We’ve got you covered, we even have midnight snacks. Besides, you can
          always serve yourself with cafeteria snacks.
        </Description>
      </Col>
      <Col>
        <Image src="" width={50} height={50} alt="" />
        <Title>Sleeping</Title>
        <Description>
          Both nights so you can rest your energy levels. Check out the FAQ for
          more info.
        </Description>
      </Col>
      <Col>
        <Image src="" width={50} height={50} alt="" />
        <Title>Sponsors</Title>
        <Description>
          You can also visit our sponsors’ stands or meet them remotely! They'll
          be available during the day and would love to talk to you! (you may
          even get some swag as well)
        </Description>
      </Col>
      <Col>
        <Image src="" width={50} height={50} alt="" />
        <Title>Live</Title>
        <Description>
          When and where will all of this happen? Check out our live page to
          find it out! It will be available during the HackUPC week.
        </Description>
      </Col>
    </Container>
  );
}
