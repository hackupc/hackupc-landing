import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin: auto;
`;

const CenteredParagraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const StyledButton = styled.button`
  padding: 1.1rem 1rem;
  color: white;
  background-color: #ec6162;
  font-size: clamp(0.5rem, 2vw, 1.5rem);
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  max-width: 20rem;
  width: 100%;
  margin: 20px auto;

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

export default function Live() {
  return (
    <Container>
      <Title>Live</Title>
      <CenteredParagraph>
        <strong>When and where will everything happen?</strong>
        <br />
        Check out our real-time schedule to find it out! It will be available
        during HackUPC.
      </CenteredParagraph>
      <StyledButton>
        <a
          href="https://live.hackupc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Go to Live</span>
        </a>
      </StyledButton>
    </Container>
  );
}
