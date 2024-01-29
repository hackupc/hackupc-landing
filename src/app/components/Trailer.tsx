import styled from "styled-components";

const Section = styled.section`
  background-color: #0f062a;
  width: 100%;
  padding: 2rem;
  text-align: center;
`;

const VideoWrapper = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 1100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  padding: 1.1rem 1rem;
  color: white;
  font-size: clamp(0.5rem, 2vw, 1.5rem);
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  max-width: 30rem;
  width: 100%;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    &:before {
      transform: scale(1);
    }
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(0.5rem);
  }
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 600px;
  border-radius: 15px;
  border: none;
  overflow: hidden;
`;

export default function TrailerSection() {
  return (
    <Section>
      <Heading>Teaser</Heading>
      <VideoWrapper>
        <StyledIframe
          title="Teaser video"
          src="https://www.youtube.com/embed/83RvKXCmcZ8?rel=0&showinfo=0"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></StyledIframe>
      </VideoWrapper>
      <ButtonContainer>
        <StyledButton href="#" bgColor="#E23532">
          Apply as a hacker
        </StyledButton>
        <StyledButton href="#" bgColor="#563065">
          Apply as a volunteer
        </StyledButton>
      </ButtonContainer>
    </Section>
  );
}
