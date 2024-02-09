import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { Body, SectionTitle, SmallTitle } from "@/app/genericComponents/Fonts";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { PrimaryOutlineButton } from "@/app/genericComponents/Buttons";

const StyledImage = styled(Image)`
  width: 100%;
`;

const InformationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SpacingS};
`;

const StyledSmallTitle = styled(SmallTitle)`
  margin-bottom: ${SpacingM};
  text-align: center;
`;

export default function Hackers() {
  return (
    <SectionBackground haveBackground>
      <Section>
        <SectionTitle>The organization behind HackUPC</SectionTitle>

        <StyledSmallTitle>
          Hackers@UPC is a non-profit student organization at Universitat
          Politècnica de Catalunya.
        </StyledSmallTitle>

        <InformationBlock>
          <StyledImage
            src="/hackersatupc.svg"
            alt="Logotype of HackersAtUPC"
            width={100}
            height={100}
          />
          <TextContainer>
            <Body>
              Throughout the year, we organize national and international events
              in order to promote science and technology among students and
              create a great community in the technological world. We also
              attend hackathons worldwide as a team.
            </Body>
            <Body>
              Our mission is to foster learning, designing, and building to turn
              students' ideas into a reality!
            </Body>
          </TextContainer>
        </InformationBlock>

        <PrimaryOutlineButton>
          <a href="https://hackersatupc.org" target="_blank" rel="noreferrer">
            Go to website
          </a>
        </PrimaryOutlineButton>
      </Section>
    </SectionBackground>
  );
}
