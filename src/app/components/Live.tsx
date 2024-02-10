import { Section } from "@/app/genericComponents/General";
import {
  Body,
  BodyBold,
  BodyLink,
  SectionTitle,
} from "@/app/genericComponents/Fonts";
import { PrimaryButton } from "@/app/genericComponents/Buttons";
import { SpacingS, SpacingXS } from "@/app/genericComponents/tokens";
import styled from "styled-components";

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: ${SpacingS};
`;

export default function Live() {
  return (
    <Section>
      <div>
        <SectionTitle>Live</SectionTitle>
      </div>
      <TextContainer>
        <BodyBold style={{ marginBottom: SpacingXS }}>
          When and where will everything happen?
        </BodyBold>
        <Body>
          In our live page you will find it out! It will be available before
          HackUPC so that you can prepare everything you might need! And also to
          check out all the activities happening during the event. You can also
          check our{" "}
          <BodyLink
            href="https://live.hackupc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            last year's live page
          </BodyLink>{" "}
          and see what happened.
        </Body>
      </TextContainer>
      <PrimaryButton disabled>
        {/* <a
          href="https://live.hackupc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check live
        </a> */}
        Coming soon...
      </PrimaryButton>
    </Section>
  );
}
