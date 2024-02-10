import styled from "styled-components";
import Image from "next/image";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { BlockTitle, Body, SectionTitle } from "@/app/genericComponents/Fonts";
import {
  Secondary500,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";

const BlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  gap: ${SpacingM};
`;

const ProvideBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${SpacingS};
  align-items: center;
  min-width: 200px;
`;

export default function Provide() {
  return (
    <SectionBackground haveBackground>
      <Section>
        <SectionTitle>We also provide...</SectionTitle>
        <BlockWrapper>
          <ProvideBlock>
            <Image
              src="/Provide/food-icon.svg"
              width={80}
              height={80}
              alt="Food icon"
            />
            <BlockTitle color={Secondary500}>Food</BlockTitle>
            <Body>
              We’ve got you completely covered, we even have midnight snacks.
              Besides, you can serve yourself with cafeteria snacks
            </Body>
          </ProvideBlock>
          <ProvideBlock>
            <Image
              src="/Provide/sleeping-icon.svg"
              width={80}
              height={80}
              alt="Sleeping icon"
            />
            <BlockTitle color={Secondary500}>Sleeping</BlockTitle>
            <Body>
              We will provide air mattresses both nights so you can boost your
              energy levels. Check out the FAQs for more info
            </Body>
          </ProvideBlock>
          <ProvideBlock>
            <Image
              src="/Provide/sponsors-icon.svg"
              width={80}
              height={80}
              alt="Sponsors icon"
            />
            <BlockTitle color={Secondary500}>Sponsors</BlockTitle>
            <Body>
              You can also visit our sponsors' stands or meet them remotely!
              They'll be available during the day and would love to talk to you!
              (you may even get some swag as well)
            </Body>
          </ProvideBlock>
        </BlockWrapper>
      </Section>
    </SectionBackground>
  );
}
