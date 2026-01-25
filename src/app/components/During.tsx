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
  z-index: 1;
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 0px;
`;

const StyledBody = styled(Body)`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  font-weight: bold;
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
  margin-right: 0;
`;

const TheMission = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const MapImageBase = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: ${SpacingM} auto;

  @media (min-width: ${MobileBreakpoint}) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
`;

const MobileMapImage = styled(MapImageBase)`
  @media (min-width: ${MobileBreakpoint}) {
    display: none;
  }

  @media (max-width: ${MobileBreakpoint}) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
`;

const DesktopMapImage = styled(MapImageBase)`
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

export default function During() {
  return (
    <DuringContainer id="during">
      <StyledSectionTitle className={lora.className}>
        DURING THE EVENT
      </StyledSectionTitle>
      <StyledBody>
        Coding is the main part of HackUPC, but we have many more activities!
      </StyledBody>

      <MobileMapImage src="/map.svg" alt="Map Mobile" />
      <DesktopMapImage src="/map_desktop.svg" alt="Map Desktop" />

      <TheMission>
        <TextWrapper>
          <StyledTitle className={lora.className}>
            THE MISSION: HACKUPC
          </StyledTitle>
        </TextWrapper>
        <Body>
          Your weekend quest awaits! This year, HackUPC becomes a medieval
          adventure filled with challenges to conquer. Forge your own path by
          overcoming mighty trials, and see if you can rise as a true hero. Will
          your legend be told in generations?
        </Body>
      </TheMission>
    </DuringContainer>
  );
}
