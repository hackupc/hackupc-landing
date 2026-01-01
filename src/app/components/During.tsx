import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { Body, SectionTitle } from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { lora } from "@/app/genericComponents/fonts";

const DuringContainer = styled(Section)`
  position: relative;
  gap: ${SpacingM};
  z-index: 100;
`;

const StyledBody = styled(Body)`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const TextWrapper = styled.div`
  text-align: center;
  justify-content: center;
  gap: ${SpacingS};
  display: inline-flex;
  margin-top: ${SpacingM};
  margin-bottom: ${SpacingS};
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-right: 0;
`;

const TheMission = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const MapImage = styled.img`
  display: block;
  margin: 0 auto ${SpacingM};
  max-width: 100%;
  height: auto;

  @media (max-width: ${MobileBreakpoint}) {
    position: relative;
    width: 100vw;
    max-width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default function During() {
  return (
    <DuringContainer id="during">
      <SectionTitle className={lora.className}>DURING THE EVENT</SectionTitle>
      <StyledBody>
        Coding is the main part of HackUPC, but we have many more activities!
      </StyledBody>

      <MapImage src="/map.svg" alt="Map" />

      <TheMission>
        <TextWrapper>
          <StyledTitle className={lora.className}>
            THE MISSION: HACKUPC
          </StyledTitle>
        </TextWrapper>
        <Body>
          Get ready for your weekend mission! This year, we aim for HackUPC to
          be like a loaded arcade with lots to play with. Have fun, complete the
          objectives, and get fantastic surprises. Will you be able to unlock
          them all?
        </Body>
      </TheMission>
    </DuringContainer>
  );
}
