import styled from "styled-components";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Fonts";
import { SpacingM, SpacingS, SpacingXS } from "@/app/genericComponents/tokens";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/app/genericComponents/Buttons";

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  margin-bottom: ${SpacingM};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${SpacingS};
  width: 100%;
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
`;

export default function TrailerSection() {
  return (
    <SectionBackground haveBackground>
      <Section>
        <SectionTitle>Teaser</SectionTitle>
        <VideoWrapper>
          <StyledIframe
            title="Teaser video"
            src="https://www.youtube.com/embed/83RvKXCmcZ8?rel=0&showinfo=0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper>
        <ButtonContainer>
          <SecondaryButton width={"60%"}>
            <a
              href="https://my.hackupc.com/user/signup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply as a hacker
            </a>
          </SecondaryButton>
          <PrimaryButton width={"60%"} disabled>
            {/*
            <a
              href="https://my.hackupc.com/user/signup/volunteer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply as a volunteer
            </a>
            */}
            Volunteers coming soon...
          </PrimaryButton>
        </ButtonContainer>
      </Section>
    </SectionBackground>
  );
}
