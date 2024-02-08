import { Section } from "@/app/genericComponents/General";
import { Body, BodyBold, SectionTitle } from "@/app/genericComponents/Fonts";
import { PrimaryButton } from "@/app/genericComponents/Buttons";
import { SpacingXS } from "@/app/genericComponents/tokens";

export default function Live() {
  return (
    <Section>
      <SectionTitle>Live</SectionTitle>
      <BodyBold style={{ marginBottom: SpacingXS }}>
        When and where will everything happen?
      </BodyBold>
      <Body>
        Check out our real-time schedule to find it out! It will be available
        during HackUPC.
      </Body>
      <PrimaryButton disabled>Comming soon...</PrimaryButton>
    </Section>
  );
}
