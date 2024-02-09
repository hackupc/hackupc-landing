import styled from "styled-components";
import Image from "next/image";
import { Section } from "@/app/genericComponents/General";
import { BlockTitle, Body, SectionTitle } from "@/app/genericComponents/Fonts";
import {
  MobileBreakpoint,
  Secondary500,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

const TheMission = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;
const ImageContainer = styled.div`
  justify-content: center;
  justify-items: center;
`;
const TextWrapper = styled.div`
  text-align: center;
  justify-content: center;
  gap: ${SpacingXS};
  font-style: oblique;
  display: inline-flex;
  margin-bottom: ${SpacingS};
  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    gap: 0;
  }
`;
const StyledTitle = styled(BlockTitle)`
  margin-bottom: 0;
`;
const StyledBodyText = styled(Body)`
  max-width: 1000px;
`;
export default function During() {
  return (
    <Section>
      <SectionTitle>DURING THE EVENT</SectionTitle>
      <Body>
        Coding is the main part of HackUPC, but we have many more activities
      </Body>
      <ImageContainer>
        <Image
          src="/activities.svg"
          alt="The Mission"
          height={500}
          width={700}
        />
      </ImageContainer>
      <TheMission>
        <TextWrapper>
          <StyledTitle color={Secondary500}>THE MISSION:</StyledTitle>
          <StyledTitle>HACKUPC</StyledTitle>
        </TextWrapper>
        <StyledBodyText>
          Get ready for your weekend mission! HackUPC is like a space race full
          of activities. Have fun, complete the objectives, and get fantastic
          surprises. Will you be able to travel beyond the stars?
        </StyledBodyText>
      </TheMission>
    </Section>
  );
}
