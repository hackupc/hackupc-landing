import { Section } from "@/app/genericComponents/General";
import { Body, BodyBold, SectionTitle } from "@/app/genericComponents/Fonts";
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
      <SectionTitle>Live</SectionTitle>
      <TextContainer>
        <BodyBold style={{ marginBottom: SpacingXS }}>
          When and where will everything happen?
        </BodyBold>
        <Body>
          Check out our real-time schedule to find it out! It will be available
          during HackUPC.
        </Body>
      </TextContainer>
      <PrimaryButton disabled>Comming soon...</PrimaryButton>
    </Section>
  );
}
