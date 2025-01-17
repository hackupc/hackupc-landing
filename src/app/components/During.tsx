import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  SpacingXXL,
  SpacingXL,
  SpacingL,
  SpacingM,
  SpacingXS,
} from "@/app/genericComponents/tokens";

const Colors = {
  Background: "#030304",
  Platforms: "#E656CD", 
  Ladders: "#00FFE0", 
};

const DuringContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: ${SpacingXL} 0 ${SpacingXXL} 0;
  gap: ${SpacingM};
  width: 100vw;
  background-color: ${Colors.Background};
  position: relative;
`;

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
  margin-top: ${SpacingL};
  margin-bottom: ${SpacingM};
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

const LeftLadder = () => (
  <LeftLadderContainer>
    <LadderSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 100">
      <line x1="20" y1="10" x2="20" y2="100" stroke={Colors.Ladders} strokeWidth="4" />
      <line x1="50" y1="10" x2="50" y2="100" stroke={Colors.Ladders} strokeWidth="4" />
      {Array.from({ length: 5 }).map((_, i) => {
        const y = 10 + (i + 1) * 15;
        return <line key={i} x1="20" y1={y} x2="50" y2={y} stroke={Colors.Ladders} strokeWidth="4" />;
      })}
    </LadderSVG>
  </LeftLadderContainer>
);

const RightLadder = () => (
  <RightLadderContainer>
    <LadderSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 100">
      <line x1="20" y1="10" x2="20" y2="100" stroke={Colors.Ladders} strokeWidth="4" />
      <line x1="50" y1="10" x2="50" y2="100" stroke={Colors.Ladders} strokeWidth="4" />
      {Array.from({ length: 5 }).map((_, i) => {
        const y = 10 + (i + 1) * 15;
        return <line key={i} x1="20" y1={y} x2="50" y2={y} stroke={Colors.Ladders} strokeWidth="4" />;
      })}
    </LadderSVG>
  </RightLadderContainer>
);

const Platform = () => (
  <PlatformContainer>
    <SvgPlatform xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 50">
      <line x1="0" y1="20" x2="800" y2="20" stroke={Colors.Platforms} strokeWidth="4" />
      <line x1="0" y1="44" x2="800" y2="44" stroke={Colors.Platforms} strokeWidth="4" />
      <g stroke={Colors.Platforms} strokeWidth="4" fill="none">
        {Array.from({ length: 16 }).map((_, i) => {
          const x = i * 50;
          return <polygon key={i} points={`${x},44 ${x + 50},44 ${x + 25},22`} />;
        })}
      </g>
    </SvgPlatform>
  </PlatformContainer>
);


const MaxWidthContainer = styled.div`
  width: 100%;
  max-width: 700px; /* Alinear todo dentro de este ancho */
  display: flex;
  justify-content: space-between;
`;

const PlatformContainer = styled(MaxWidthContainer)`
  justify-content: center;
  margin: 0;
`;

const SvgPlatform = styled.svg`
  width: 100%;
  height: 44px;
`;

const LeftLadderContainer = styled(MaxWidthContainer)`
  justify-content: flex-start;
  margin-top: -45px;
  margin-bottom: -50px;
  padding: 0 2%;
`;

const RightLadderContainer = styled(MaxWidthContainer)`
  justify-content: flex-end;
  margin-top: -45px;
  margin-bottom: -50px;
  padding: 0 2%;
`;

const LadderSVG = styled.svg`
  width: 70px;
  height: 90px;
`;

const LadderText = styled.div`
  position: relative;
  top: 35px; /* Ajusta la distancia entre la plataforma y el texto */
  text-align: left;
  color: white;
  font-size: 1.25rem;
  margin-top: -25px;
  margin-bottom: -30px;
`;

const LeftLadderText = styled(LadderText)`
  left: -50px;
`;

const RightLadderText = styled(LadderText)`
  right: -50px;
`;

export default function During() {
  return (
    <Section id="during">
    <DuringContainer>
      <SectionTitle>DURING THE EVENT</SectionTitle>
      <Body>
        Coding is the main part of HackUPC, but we have many more activities
      </Body>

      <Platform />
      <LeftLadderText>Talks & Workshops</LeftLadderText>
      <LeftLadder />

      <Platform />
      <RightLadderText>SlideShare Show</RightLadderText>
      <RightLadder />

      <Platform />
      <LeftLadderText>Dodgeball</LeftLadderText>
      <LeftLadder />

      <Platform />
      <RightLadderText>Nerf Gun Battle</RightLadderText>
      <RightLadder />

      <Platform />
      <LeftLadderText>Sticker Exchange</LeftLadderText>
      <LeftLadder />

      <Platform />

      <TheMission>
        <TextWrapper>
          <StyledTitle> THE MISSION: </StyledTitle>
          <StyledTitle color={Colors.Ladders}> HACKUPC</StyledTitle>
        </TextWrapper>
        <StyledBodyText>
        Get ready for your weekend mission! This year, we aim for HackUPC
        to be like a loaded arcade with lots to play with. Have fun, 
        complete the objectives, and get fantastic surprises. Will you
        be able to unlock them all?
        </StyledBodyText>
      </TheMission>
    </DuringContainer>
    </Section>
  );
}
