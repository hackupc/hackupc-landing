import styled, { keyframes } from "styled-components";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import {
  Neutral300,
  Neutral500,
  SpacingM,
  SpacingS,
  SpacingXL,
} from "@/app/genericComponents/tokens";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/app/genericComponents/Buttons";
import { silom } from "@/app/genericComponents/fonts";

/*const VideoWrapper = styled.div`
  position: relative;
  width: 80%;
  padding-top: 45%;  16:9 aspect ratio
  margin-bottom: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    padding-top: 56.25%;  16:9 aspect ratio
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${SpacingXS};
  border: none;
  overflow: hidden;
`; */

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: ${SpacingM};
  gap: ${SpacingS};
  width: 100%;
`;

const shimmerAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`;

const VideoNotAvailable = styled.div`
  padding: ${SpacingXL};
  background-color: ${Neutral500};
  text-align: center;
  border-radius: ${SpacingS};
  position: relative;
  overflow: hidden;
  color: ${Neutral300};

  /* Shimmer effect layer */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(35, 47, 52, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(35, 47, 52, 0) 100%
    );
    animation: ${shimmerAnimation} 3s infinite linear; /* Apply the animation */
  }
`;

export default function Trailer() {
  return (
    <SectionBackground haveBackground>
      <Section>
        <SectionTitle>Teaser</SectionTitle>
        <VideoNotAvailable> Teaser coming soon... </VideoNotAvailable>
        {/* <VideoWrapper>
          <StyledIframe
            title="Teaser video"
            src="https://www.youtube.com/embed/83RvKXCmcZ8?rel=0&showinfo=0"
            allowFullScreen
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper> */}
        <ButtonContainer className={silom.className}>
          <SecondaryButton
            width={"60%"}
            href="https://my.hackupc.com/user/signup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply as a hacker
          </SecondaryButton>
          <PrimaryButton
            href="https://my.hackupc.com/user/signup/volunteer/"
            target="_blank"
            rel="noopener noreferrer"
            width={"60%"}
            style={{ marginTop: 0 }}
          >
            Apply as a volunteer
          </PrimaryButton>
        </ButtonContainer>
      </Section>
    </SectionBackground>
  );
}
