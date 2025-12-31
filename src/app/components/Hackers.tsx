import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { lora } from "@/app/genericComponents/fonts";
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
  HeroNeutral: "#231F20",
  HeroBlack: "#000000",
  HeroBlack80: "rgba(0, 0, 0, 0.8)",
};



const BlueContainer = styled.div`
  border: 2px solid ${Colors.HeroBlue};
  border-radius: 8px;
  padding: ${SpacingM};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledButton = styled.div`
  color: #000000;
  padding: ${SpacingS} ${SpacingM};
  border-radius: 8px;
  margin-top: ${SpacingM};
  cursor: pointer;
  font-weight: bold;
  font-size: ${TitleS};
  text-align: center;

  &:hover {
    color: #ffffff;
  }
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
    <Section id="hackers">
      <BlueContainer>
        <SectionTitle className={lora.className}>
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
            width={80}
            height={80}
          />
          <TextContainer>
            <Body>
              Throughout the year, we organize national and international
              events in order to promote science and technology among students
              and create a great community in the technological world. We also
              attend hackathons worldwide as a team.
            </Body>
            <Body>
              Our mission is to foster learning, designing, and building to
              turn students' ideas into a reality!
            </Body>
          </TextContainer>
        </InformationBlock>

        <StyledButton
          as="a"
          href="https://hackersatupc.org"
          target="_blank"
          rel="noreferrer"
          className={lora.className}
        >
          Go to website
        </StyledButton>
      </BlueContainer>
    </Section>
  );
}
