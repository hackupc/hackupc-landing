import { Section } from "@/app/genericComponents/General";
import {
  Body,
  BodyBold,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import { PrimaryButton } from "@/app/genericComponents/Buttons";
import {
  Secondary500,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import styled, { keyframes } from "styled-components";
import { silkscreen } from "@/app/genericComponents/fonts";

const live = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: .25;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: ${SpacingS};
`;

const StyledSectionTitle = styled(SectionTitle)`
  display: flex;
  align-items: center;
  gap: ${SpacingS};
`;

const LiveDotAnimated = styled.div`
  -webkit-animation: ${live} 2.5s cubic-bezier(0.82, 0.23, 0.55, 0.95) infinite
    alternate;
  animation: ${live} 2.5s cubic-bezier(0.82, 0.23, 0.55, 0.95) infinite
    alternate;
  background: ${Secondary500};
  border-radius: 100%;
  height: ${SpacingS};
  width: ${SpacingS};
`;

const Anchor = styled.a`
  color: ${Secondary500};
  text-decoration: underline;
  cursor: pointer;
`;

export default function Live() {
  return (
    <Section id="live">
      <StyledSectionTitle className={silkscreen.className}>
        <LiveDotAnimated />
        Live
      </StyledSectionTitle>
      <TextContainer>
        <BodyBold style={{ marginBottom: SpacingXS }}>
          When and where will all of this happen?
        </BodyBold>
        <Body>
          In our live page you will find it out! It will be available before
          HackUPC so that you can prepare everything you might need! And of
          course it will be the page you visit to check out all the activities
          happening during the event. You can also check our{" "}
          <Anchor href="https://2024-live.hackupc.com/" target="_blank">
            {" "}
            last year's live page
          </Anchor>{" "}
          page and see what happened.
        </Body>
      </TextContainer>
      <PrimaryButton
        className={silkscreen.className}
        href="https://live.hackupc.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check live
      </PrimaryButton>
    </Section>
  );
}
