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
  margin-top: ${SpacingS};
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
  padding: 0 150px 0 150px;

  @media (min-width: ${MobileBreakpoint}) and (max-width: 1000px) {
    padding: 0 15% 0 15%;
  }

  @media (max-width: ${MobileBreakpoint}) {
    padding: 0;
  }
`;

const MapImageBase = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: ${SpacingM} auto;

  @media (min-width: ${MobileBreakpoint}) and (max-width: 1600px) {
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

export const RibbonTitle = styled(SectionTitle)`
  position: relative;
  color: #000000;
  width: fit-content;
  margin: 0 auto 45px auto;
  padding: 8px 32px 24px 32px;
  font-size: 32px;
  background-color: rgba(238, 228, 194, 1);
  text-align: center;
  justify-content: center;
  align-items: center;

  /* Left */
  &::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: -100px;
    width: 40%;
    height: 80%;
    background-color: #a19673ff;
    z-index: -1;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20% 50%);
  }

  /* Right */
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: -100px;
    width: 40%;
    height: 80%;
    background-color: #a19673ff;
    z-index: -1;
    clip-path: polygon(0% 0%, 100% 0%, 80% 50%, 100% 100%, 0% 100%);
  }

  @media (max-width: 1000px and min-width: ${MobileBreakpoint}) {
    &::before {
      left: -100px;
      width: 50%;
      height: 50%;
    }

    /* Right */
    &::after {
      right: -100px;
      width: 50%;
      height: 50%;
    }
  }
  @media (max-width: ${MobileBreakpoint}) {
    &::before {
      display: none;
      left: -75px;
      width: 50%;
      height: 60%;
    }

    /* Right */
    &::after {
      display: none;
      right: -75px;
      width: 50%;
      height: 60%;
    }
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
        <RibbonTitle className={lora.className}>
          <TextWrapper>
            <StyledTitle className={lora.className}>
              THE MISSION: HACKUPC
            </StyledTitle>
          </TextWrapper>
          <Body>
            Your weekend quest awaits! This year, HackUPC becomes a medieval
            adventure filled with challenges to conquer. Forge your own path by
            overcoming mighty trials, and see if you can rise as a true hero.
            Will your legend be told in generations?
          </Body>
        </RibbonTitle>
      </TheMission>
    </DuringContainer>
  );
}
