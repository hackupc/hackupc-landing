import styled from "styled-components";
import Image from "next/image";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px auto;
  max-width: 1000px;
  position: relative;
  text-align: center;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin: auto;
`;
const Info = styled.h3`
  margin-top: 48px;
  text-align: center;
`;
const TheMission = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  position: relative;
  text-align: center;
`;
const ImageContainer = styled.div`
  margin: auto;
  position: relative;
`;
const SpecialTitle = styled.h3`
  text-align: center;
  margin: auto;
  font-size: 48px;
  font-weight: 500;
  font-style: oblique;
  display: inline-flex;
`;
const ColoredSpecialTitle = styled(SpecialTitle)`
  color: #e23532;
  margin-right: 16px;
`;
const Description = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 16px 0;
`;
export default function During() {
  return (
    <ContentWrapper>
      <Title>DURING THE EVENT</Title>
      <Info>
        Coding is the main part of HackUPC, but we have many more activities
      </Info>
      <ImageContainer>
        <Image
          src="/activities.svg"
          alt="The Mission"
          height={500}
          width={700}
        />
      </ImageContainer>
      <TheMission>
        <SpecialTitle>
          <ColoredSpecialTitle>THE MISSION:</ColoredSpecialTitle>
          HACKUPC
        </SpecialTitle>
        <Description>
          Get ready for your weekend mission! HackUPC is like a space race full
          of activities. Have fun, complete the objectives, and get fantastic
          surprises. Will you be able to travel beyond the stars?
        </Description>
      </TheMission>
    </ContentWrapper>
  );
}
