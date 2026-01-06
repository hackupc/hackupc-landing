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
  SpacingM,
  TitleS,
} from "@/app/genericComponents/tokens";
import styled, { keyframes } from "styled-components";
import { lora } from "@/app/genericComponents/fonts";

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

const StyledButton = styled.div`
  background-color: #a3c9a8;
  color: #000000;
  padding: ${SpacingS} ${SpacingM};
  border-radius: 8px;
  margin-top: ${SpacingM};
  cursor: pointer;
  font-weight: bold;
  font-size: ${TitleS};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.35);

  &:hover {
    background-color: #8bb190;
    color: #000000;
  }
`;

const WhiteContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.51);
  border-radius: 10px;
  padding: ${SpacingM};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function Live() {
  return (
    <Section id="live">
      <WhiteContainer>
        <StyledSectionTitle className={lora.className}>
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
        <StyledButton
          as="a"
          //href="https://live.hackupc.com/"
          target="_blank"
          rel="noreferrer"
          className={lora.className}
        >
          Not available yet
        </StyledButton>
      </WhiteContainer>
    </Section>
  );
}
