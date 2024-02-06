import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #12042ab3;
  text-align: center;
`;

const Col = styled.div`
  padding: 20px;
  flex: 1;
`;

const Title = styled.div`
  color: #e23532;
  font-size: 32px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;
const Description = styled.div`
  font-size: 28px;
  color: #f9fdff;
`;

export default function Provide() {
  return (
    <div>
      <Container>
        <Col>
          <Image src="/hotdog.svg" width={80} height={80} alt="Hotdog icon" />
          <Title>Food</Title>
          <Description>
            We've got you covered, we even have midnight snacks. Besides, you
            can always serve yourself with cafeteria snacks.
          </Description>
        </Col>
        <Col>
          <Image src="/bed.svg" width={80} height={80} alt="Bed icon" />
          <Title>Sleeping</Title>
          <Description>
            Both nights so you can rest your energy levels. Check out the FAQ
            for more info.
          </Description>
        </Col>
      </Container>
      <Container>
        <Col>
          <Image src="/oldTv.svg" width={80} height={80} alt="Old TV icon" />
          <Title>Sponsors</Title>
          <Description>
            You can also visit our sponsors' stands or meet them remotely!
            They'll be available during the day and would love to talk to you!
            (you may even get some swag as well)
          </Description>
        </Col>
        <Col>
          <Image
            src="/antenna.svg"
            width={80}
            height={80}
            alt="Broadcast antenna icon"
          />
          <Title>Live</Title>
          <Description>
            When and where will all of this happen? Check out our live page to
            find it out! It will be available during the HackUPC week.
          </Description>
        </Col>
      </Container>
    </div>
  );
}
