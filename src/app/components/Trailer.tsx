import styled from "styled-components";

// Breakpoints for responsive design
const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 576,
};

// Media queries
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => `@media (max-width: ${sizes[label]}px) { ${args} }`;
  return acc;
}, {});

const Section = styled.section`
  background-color: #ae8dce;
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
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 35%;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  // Responsive adjustments
  ${media.desktop(`
    width: 50%;
  `)}
  ${media.tablet(`
    width: 70%;
    font-size: 1rem;
    padding: 0.8rem 1.6rem; 
  `)}
    ${media.phone(`
    width: 90%;
    font-size: 0.9rem;
    padding: 0.7rem 1.4rem; 
  `)}
`;

const Heading = styled.h2`
  color: #190536;
  font-size: 3rem;
  font-weight: bold;

  // Responsive adjustments
  ${media.tablet`font-size: 2.5rem;`}
  ${media.phone`font-size: 2rem;`}
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 600px;
  border-radius: 15px;
  border: none;
  overflow: hidden;

  // Make the iframe responsive
  ${media.desktop`height: 450px;`}
  ${media.tablet`height: 400px;`}
  ${media.phone`height: 300px;`}
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
