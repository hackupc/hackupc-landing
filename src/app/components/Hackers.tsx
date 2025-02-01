import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { silkscreen } from "@/app/genericComponents/fonts";
import { Section } from "@/app/genericComponents/General";
import {
  Body,
  SectionTitle,
  SmallTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  TitleS,
} from "@/app/genericComponents/tokens";

const Colors = {
  HeroYellow: "#FCFC01",
  HeroBlue: "#0060BF",
};

const StyledButton = styled.div`
  background-color: ${Colors.HeroYellow};
  color: #000000;
  padding: ${SpacingS} ${SpacingM};
  border-radius: 8px;
  margin-top: ${SpacingM};
  cursor: pointer;
  font-weight: bold;
  font-size: ${TitleS};
  text-align: center;

  &:hover {
    background-color: ${Colors.HeroBlue};
    color: #ffffff;
  }
`;

const HackersContainer = styled(Section)`
  max-width; 100%
`;

const StyledImage = styled(Image)`
  width: 100%;
`;

const InformationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingM};
  margin-bottom: ${SpacingS};

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
    <HackersContainer id="hackers">
      <Section>
        <SectionTitle className={silkscreen.className}>
          The organization behind HackUPC
        </SectionTitle>

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

        <StyledButton
          as="a"
          href="https://hackersatupc.org"
          target="_blank"
          rel="noreferrer"
          className={silkscreen.className}
        >
          Go to website
        </StyledButton>
      </Section>
    </HackersContainer>
  );
}
