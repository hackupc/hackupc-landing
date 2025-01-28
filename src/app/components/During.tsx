import styled, { keyframes } from "styled-components";
import { Section } from "@/app/genericComponents/General";
import {
  Body,
  SectionTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  TitleM,
  MobileTitleM,
  MobileTitleS,
  SpacingXXL,
  SpacingXL,
  SpacingL,
  SpacingM,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import {silkscreen} from "@/app/genericComponents/fonts";

const Colors = {
  Background: "#030304",
  Platforms: "#E656CD", 
  Ladders: "#00FFE0", 
  white: "000000"
};

const DuringContainer = styled(Section)`
  position: relative;
  padding: ${SpacingXL} 0 ${SpacingXXL} 0;
  gap: ${SpacingM};
  max-width: 100%;
  background-color: ${Colors.Background};
  z-index: 0;
`;

const TheMission = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
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
  gap: ${SpacingXS};
  display: inline-flex;
  margin-top: ${SpacingM};
  margin-bottom: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    text-align: center;
    gap: 0;
  }
`;

const StyledTitle = styled(SectionTitle)`
  font-size: ${TitleM};
  margin-right: 0px;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
  }

  @media (max-width: 340px) {
    font-size: ${MobileTitleS};
  }
`;

const HackUPCColored = styled(StyledTitle)`
  color: ${Colors.Ladders};
  margin-left: 0px;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
  }

  @media (max-width: 340px) {
    font-size: ${MobileTitleS};
  }
`;

const GameContainer = styled.div`
  max-width: 700px;
  width: 100%;
  align-items: center; /* Centra horizontalmente */
  justify-content: center; /* Centra verticalmente */
  margin: 0 auto;
  position: relative;

  @media (max-width: ${MobileBreakpoint}) {
    max-width: 100%;
  }
`;

const BarrelContainer = styled.div`
  position: relative;
  width: 90%; 
  height: 150px;
  right; 1px;
  align-items: center;
  margain: 0px;
`;

const BarrelFront1 = styled.img`
  position: absolute;
  bottom: 0px;
  right: 80px;
  z-index: 2; /* Frente */

  @media (max-width: ${MobileBreakpoint}) {
    right: 80px;
  }
`;

const BarrelFront2 = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 2; /* Frente */

  @media (max-width: ${MobileBreakpoint}) {
    right: 0px;
  }
`;

const BarrelBack = styled.img`
  position: absolute;
  bottom: 25px;
  right: 40px;
  z-index: 1; /* Detrás */

  @media (max-width: ${MobileBreakpoint}) {
    right: 40px;
  }
`;

const Barrels = () => (
  <BarrelContainer>
    <BarrelBack
      src="/BarrelBack_DK.svg"
      alt="Barrel Back"
    />
    <BarrelFront1
      src="/BarrelFront_DK.svg"
      alt="Barrel Front"
    />
    <BarrelFront2
      src="/BarrelFront_DK.svg"
      alt="Barrel Front"
    />
  </BarrelContainer>
);

const LeftLadder = () => (
  <LeftLadderContainer>
    <img src="/Ladder_DK.svg" alt="Left Ladder" />
  </LeftLadderContainer>
);

const RightLadder = () => (
  <RightLadderContainer>
    <img src="/Ladder_DK.svg" alt="Right Ladder" />
  </RightLadderContainer>
);

const Platform = () => (
  <PlatformContainer>
    <img src="/Platform_DK.svg" alt="Platform" />
  </PlatformContainer>
);

const MaxWidthContainer = styled.div`
  position: relative;
  max-width: 700px; /* Alinear todo dentro de este ancho */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PlatformContainer = styled(MaxWidthContainer)`
  justify-content: center;
  margin: 0;

  @media (max-width: ${MobileBreakpoint}) {
    max-width: 100%;
  }
`;

const LeftLadderContainer = styled(MaxWidthContainer)`
  justify-content: flex-start;
  margin-top: 29px;
  margin-bottom: 0px;
  left: 10%
`;

const RightLadderContainer = styled(MaxWidthContainer)`
  justify-content: flex-end;
  margin-top: 29px;
  margin-bottom: 0px;
  right: 10%;

  @media (max-width: ${MobileBreakpoint}) {
    right: 8%;
  }
`;

const CoinText = styled(Body)`
  position: relative;
  top: 75px;
  justify-content: flex-start;
  color: white;
  margin-top: -25px;
  margin-bottom: -30px;
  font-weight: bold;
  z-index: 2;

  img {
    margin-top: 2px;
    margin-right: 8px;
  }
`;

const LeftLadderText = styled(CoinText)`
  left: 35%;

  @media (max-width: 450px) {
    left: 25%;
  }
`;

const RightLadderText = styled(CoinText)`
  left: 45%;

  @media (max-width: 450px) {
    left: 30%;
  }
`;

const MoveBarrel = keyframes`
  0% { top: 15%; left: 68%; opacity: 1;}
  14.28% { top: 15%; left: 10%; transform: rotate(-1080deg); opacity: 1;}
  16.66% { top: 30%; left: 10%; opacity: 1;}
  30.94% { top: 30%; left: 84%; transform: rotate(1080deg); opacity: 1;}
  33.32% { top: 45%; left: 84%; opacity: 1;}
  47.60% { top: 45%; left: 10%; transform: rotate(-1080deg); opacity: 1;}
  49.98% { top: 60%; left: 10%; opacity: 1;}
  64.26% { top: 60%; left: 84%; transform: rotate(1080deg); opacity: 1;}
  66.64% { top: 75.5%; left: 84%; opacity: 1;}
  80.92% { top: 75.5%; left: 10%; transform: rotate(-1080deg); opacity: 1;}
  83.30% { top: 91%; left: 10%; opacity: 1;}
  97.58% { top: 91%; left: 95%; transform: rotate(1080deg); opacity: 1;}
  100% { top: 99%; left: 95%; opacity: 0; } /* Última línea hacia abajo */
`;

const Barrel = styled.img`
  position: absolute;
  opacity: 0;
  z-index: 1;
  animation: ${MoveBarrel} 35s linear infinite;
`;

const MoveBiene = keyframes`
  0% { top: 7%; left: 21.5%; opacity: 1;}  /* Comienza en la parte 68% */
  14.28% { top: 7%; left: 21.5%; opacity: 1;} 
  28.56% { top: 0%; left: 21.5%; opacity: 1;}  /* Llega a la posición 68% */
  42.84% { top: 7%; left: 21.5%; opacity: 1;} 
  100%  {top: 7%; left: 21.5%; opacity: 1;}  /* Termina en la parte superior */
`;

const MoveBieneMobile = keyframes`
  0% { top: 7%; left: 21.5%; opacity: 1;}  /* Comienza en la parte 68% */
  12.28% { top: 7%; left: 21.5%; opacity: 1;} 
  27.56% { top: 0%; left: 21.5%; opacity: 1;}  /* Llega a la posición 68% */
  40.84% { top: 7%; left: 21.5%; opacity: 1;} 
  100%  {top: 7%; left: 21.5%; opacity: 1;}  /* Termina en la parte superior */
`;

const Biene = styled.img`
  position: absolute;
  opacity: 0;
  animation: ${MoveBiene} 7s linear infinite 2s;
  z-index: 2;

  @media (max-width: ${MobileBreakpoint}) {
    animation: ${MoveBieneMobile} 7s linear infinite 2s;
  }
`;

const Barrel1 = styled(Barrel)`
   animation-delay: 0s;
`;

const Barrel2 = styled(Barrel)`
   animation-delay: 7s;
`;

const Barrel3 = styled(Barrel)`
   animation-delay: 14s;
`;

const Barrel4 = styled(Barrel)`
   animation-delay: 21s;
`;

const Barrel5 = styled(Barrel)`
   animation-delay: 28s;
`;

export default function During() {
  return (
    <DuringContainer id="during">
      <SectionTitle className={silkscreen.className}> DURING THE EVENT</SectionTitle>
      <StyledBody>
        Coding is the main part of HackUPC, but we have many more activities
      </StyledBody>

      <GameContainer>
      <Barrels />
      <Biene src="/Biene_DK.svg" alt="Biene" />
      <Barrel1 src="/BarrelMove_DK.svg" alt="Barrel" />
      <Barrel2 src="/BarrelMove_DK.svg" alt="Barrel" />
      <Barrel3 src="/BarrelMove_DK.svg" alt="Barrel" />
      <Barrel4 src="/BarrelMove_DK.svg" alt="Barrel" />
      <Barrel5 src="/BarrelMove_DK.svg" alt="Barrel" />

      <Platform />
      <LeftLadderText>
        <img src="/Coin_DK.svg" alt="Moneda" />
        Talks & Workshops 
      </LeftLadderText>
      <LeftLadder />

      <Platform />
      <RightLadderText>
        <img src="/Coin_DK.svg" alt="Moneda" />
        SlideShare Show
      </RightLadderText>
      <RightLadder />

      <Platform />
      <LeftLadderText>
        <img src="/Coin_DK.svg" alt="Moneda" />
        Dodgeball
      </LeftLadderText>
      <LeftLadder />

      <Platform />
      <RightLadderText>
       <img src="/Coin_DK.svg" alt="Moneda" />
        Nerf Gun Battle
      </RightLadderText>
      <RightLadder />

      <Platform />
      <LeftLadderText>
      <img src="/Coin_DK.svg" alt="Moneda" />
        Sticker Exchange
      </LeftLadderText>
      <LeftLadder />

      <Platform />

      </GameContainer>

      <TheMission>
        <TextWrapper>
          <StyledTitle className={silkscreen.className}>THE MISSION:</StyledTitle>
          <HackUPCColored className={silkscreen.className}>HACKUPC</HackUPCColored>
        </TextWrapper>
        <Body>
        Get ready for your weekend mission! This year, we aim for HackUPC
        to be like a loaded arcade with lots to play with. Have fun, 
        complete the objectives, and get fantastic surprises. Will you
        be able to unlock them all?
        </Body>
      </TheMission>
    </DuringContainer>
  );
}
