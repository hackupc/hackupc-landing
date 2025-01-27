//import styled from "styled-components";
import styled, { keyframes } from "styled-components";
import { Section } from "@/app/genericComponents/General";
import {
  BlockTitle,
  Body,
  //SectionTitle,
} from "@/app/genericComponents/Typography";
import {
  MobileBreakpoint,
  TitleM,
  TitleL,
  MobileTitleL,
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

export const SectionTitle = styled.div`
  font-size: ${TitleL};
  text-align: center;
  font-weight: bold;
  width: fit-content;
  margin: 0;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

const TheMission = styled.div`
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

const StyledBodyText = styled(Body)`
  max-width: 1000px;
`;

const BarrelContainer = styled.div`
  position: relative;
  width: 400px; 
  height: 200px;
  display: flex;
  left; 70%;
  align-items: center;
  margin-bottom: -30px;
  margin-top: -40px;
`;

const BarrelFront1 = styled.img`
  position: absolute;
  top: 125px;
  right: 0px;
  z-index: 2; /* Frente */

  @media (max-width: ${MobileBreakpoint}) {
    right: 80px;
  }
`;

const BarrelFront2 = styled.img`
  position: absolute;
  top: 125px;
  right: -80px;
  z-index: 2; /* Frente */

  @media (max-width: ${MobileBreakpoint}) {
    right: 0px;
  }
`;

const BarrelBack = styled.img`
  position: absolute;
  top: 100px;
  right: -40px;
  z-index: 1; /* Detrás */

  @media (max-width: ${MobileBreakpoint}) {
    right: 40px;
  }
`;

const Barrels = () => (
  <BarrelContainer>
    {/* Barril trasero (en el centro) */}
    <BarrelBack
      src="/BarrelBack_DK.svg"
      alt="Barrel Back"
    />

    {/* Barriles delanteros */}
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
  width: 700px;
  max-width: 700px; /* Alinear todo dentro de este ancho */
  display: flex;
  justify-content: space-between;
`;

const PlatformContainer = styled(MaxWidthContainer)`
  justify-content: center;
  margin: 0;
`;

const LeftLadderContainer = styled(MaxWidthContainer)`
  justify-content: flex-start;
  margin-top: -34px;
  margin-bottom: -31px;
  padding: 0 5%;
`;

const RightLadderContainer = styled(MaxWidthContainer)`
  justify-content: flex-end;
  margin-top: -34px;
  margin-bottom: -31px;
  padding: 0 5%;
`;

const CoinText = styled(Body)`
  position: relative;
  top: 38px;
  justify-content: flex-start;
  color: white;
  margin-top: -25px;
  margin-bottom: -30px;
  font-weight: bold;

  img {
    margin-top: 2px;
    margin-right: 8px;
  }
`;

const LeftLadderText = styled(CoinText)`
  left: -50px;

  @media (max-width: ${MobileBreakpoint}) {
    left: -25px;
  }
`;

const RightLadderText = styled(CoinText)`
  right: -50px;

  @media (max-width: ${MobileBreakpoint}) {
    right: -18px;
  }
`;

const MoveBarrel = keyframes`
  0% { top: 27.5%; left: 57%; opacity: 1;}
  14.28% { top: 27.5%; left: 32%; transform: rotate(-1080deg); opacity: 1;}
  16.66% { top: 35.5%; left: 32%; opacity: 1;}
  30.94% { top: 35.5%; left: 65%; transform: rotate(1080deg); opacity: 1;}
  33.32% { top: 43.5%; left: 65%; opacity: 1;}
  47.60% { top: 43.5%; left: 32%; transform: rotate(-1080deg); opacity: 1;}
  49.98% { top: 52%; left: 32%; opacity: 1;}
  64.26% { top: 52%; left: 65%; transform: rotate(1080deg); opacity: 1;}
  66.64% { top: 60%; left: 65%; opacity: 1;}
  80.92% { top: 60%; left: 32%; transform: rotate(-1080deg); opacity: 1;}
  83.30% { top: 68%; left: 32%; opacity: 1;}
  97.58% { top: 68%; left: 71%; transform: rotate(1080deg); opacity: 1;}
  100% { top: 75%; left: 71%; opacity: 0; } /* Última línea hacia abajo */
`;

const MoveBarrelTablet = keyframes`
  0% { top: 27%; left: 65%; opacity: 1;}
  14.28% { top: 27%; left: 12%; transform: rotate(-1080deg); opacity: 1;}
  16.66% { top: 35%; left: 12%; opacity: 1;}
  30.94% { top: 35%; left: 82%; transform: rotate(1080deg); opacity: 1;}
  33.32% { top: 43%; left: 82%; opacity: 1;}
  47.60% { top: 43%; left: 12%; transform: rotate(-1080deg); opacity: 1;}
  49.98% { top: 51%; left: 12%; opacity: 1;}
  64.26% { top: 51%; left: 82%; transform: rotate(1080deg); opacity: 1;}
  66.64% { top: 59%; left: 82%; opacity: 1;}
  80.92% { top: 59%; left: 12%; transform: rotate(-1080deg); opacity: 1;}
  83.30% { top: 67%; left: 12%; opacity: 1;}
  97.58% { top: 67%; left: 88%; transform: rotate(1080deg); opacity: 1;}
  100% { top: 75%; left: 88%; opacity: 0; } /* Última línea hacia abajo */
`;

const MoveBarrelMobile = keyframes`
    0% { top: 26.5%; left: 70%; opacity: 1;}
    14.28% { top: 26.5%; left: 5%; transform: rotate(-1080deg); opacity: 1;}
    16.66% { top: 34%; left: 5%; opacity: 1;}
    30.94% { top: 34%; left: 87%; transform: rotate(1080deg); opacity: 1;}
    33.32% { top: 41.5%; left: 87%; opacity: 1;}
    47.60% { top: 41.5%; left: 5%; transform: rotate(-1080deg); opacity: 1;}
    49.98% { top: 49%; left: 5%; opacity: 1;}
    64.26% { top: 49%; left: 87%; transform: rotate(1080deg); opacity: 1;}
    66.64% { top: 56.5%; left: 87%; opacity: 1;}
    80.92% { top: 56.5%; left: 5%; transform: rotate(-1080deg); opacity: 1;}
    83.30% { top: 64%; left: 5%; opacity: 1;}
    97.58% { top: 64%; left: 90%; transform: rotate(1080deg); opacity: 1;}
    100% { top: 71%; left: 90%; opacity: 0; } /* Última línea hacia abajo */
`;

const Barrel = styled.img`
  position: absolute;
  opacity: 0;
  animation: ${MoveBarrel} 35s linear infinite;

  @media (max-width: 850px) {
    animation: ${MoveBarrelTablet} 35s linear infinite;
  }

  @media (max-width: ${MobileBreakpoint}) {
    animation: ${MoveBarrelMobile} 35s linear infinite;
  }
`;

const MoveBiene = keyframes`
  0% { top: 23%; left: 35%; opacity: 1;}  /* Comienza en la parte 68% */
  17.28% { top: 23%; left: 35%; opacity: 1;} 
  31.56% { top: 19%; left: 35%; opacity: 1;}  /* Llega a la posición 68% */
  45.84% { top: 23%; left: 35%; opacity: 1;} 
  100%  {top: 23%; left: 35%; opacity: 1;}  /* Termina en la parte superior */
`;

const MoveBieneTablet = keyframes`
  0% { top: 23%; left: 18.5%; opacity: 1;}  /* Comienza en la parte 68% */
  17.28% { top: 23%; left: 18.5%; opacity: 1;} 
  31.56% { top: 19%; left: 18.5%; opacity: 1;}  /* Llega a la posición 68% */
  45.84% { top: 23%; left: 18.5%; opacity: 1;} 
  100%  {top: 23%; left: 18.5%; opacity: 1;}  /* Termina en la parte superior */
`;

const MoveBieneMobile = keyframes`
  0% { top: 23%; left: 8%; opacity: 1;}  /* Comienza en la parte 68% */
  17.28% { top: 23%; left: 8%; opacity: 1;} 
  31.56% { top: 19%; left: 8%; opacity: 1;}  /* Llega a la posición 68% */
  45.84% { top: 23%; left: 8%; opacity: 1;} 
  100%  {top: 23%; left: 8%; opacity: 1;}  /* Termina en la parte superior */
`;

const Biene = styled.img`
  position: absolute;
  opacity: 0;
  animation: ${MoveBiene} 7s linear infinite 2s;

  @media (max-width: 850px) {
    animation: ${MoveBieneTablet} 7s linear infinite 2s;
  }

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
      <TextWrapper>
        Coding is the main part of HackUPC, but we have many more activities
      </TextWrapper>

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

      <TheMission>
        <TextWrapper>
          <StyledTitle className={silkscreen.className}>THE MISSION:</StyledTitle>
          <HackUPCColored className={silkscreen.className}>HACKUPC</HackUPCColored>
        </TextWrapper>
        <StyledBodyText>
        Get ready for your weekend mission! This year, we aim for HackUPC
        to be like a loaded arcade with lots to play with. Have fun, 
        complete the objectives, and get fantastic surprises. Will you
        be able to unlock them all?
        </StyledBodyText>
      </TheMission>
    </DuringContainer>
  );
}
