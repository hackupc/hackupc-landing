import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  max-width: 1000px;
  position: relative;
  text-align: center;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin: auto;
  padding-right: 2rem;
`;
const Info = styled.h3`
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  border: 4px dotted #c379e0;
  padding: 0.5rem 1rem;
`;
const TheMission = styled.div`
  border: 3px solid #c379e0;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  position: relative;
  text-align: center;
  margin-top: 2rem;
`;
const SpecialTitle = styled.h3`
  text-align: center;
  margin: auto;
  font-size: 3rem;
  font-weight: 500;
  font-style: oblique;
  display: inline-flex;
`;
const ColoredSpecialTitle = styled(SpecialTitle)`
  color: #e23532;
  margin-right: 1rem;
`;
const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 1rem 0;
`;
export default function During() {
  return (
    <ContentWrapper>
      <Title>DURING THE EVENT</Title>
      <Info>
        Coding is the main part of HackUPC, but we have many more activities
      </Info>
      <p>INSERTAR DISSENY TO UAPO</p>
      <TheMission>
        <SpecialTitle>
          <ColoredSpecialTitle>THE MISSION:</ColoredSpecialTitle>HACKUPC
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
