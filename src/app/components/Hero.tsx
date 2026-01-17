import Image from "next/image";
import styled, { keyframes } from "styled-components";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXL,
  TitleS,
} from "@/app/genericComponents/tokens";
import { montserrat } from "@/app/genericComponents/fonts";

const Colors = {
  SkyBlue: "#AADEFE",
  MedievalGreen: "#75AA7E",
  Black: "#000000",
  StoneGrey: "#D9D9D9", 
};


const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fly = keyframes`
  0% { transform: translateX(0px) translateY(0px); }
  50% { transform: translateX(-15px) translateY(5px); }
  100% { transform: translateX(0px) translateY(0px); }
`;


const HeroContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.SkyBlue};
`;

const SkySection = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; 
  position: relative;
  width: 100%;
  padding-bottom: 60px; 

  @media (max-width: ${MobileBreakpoint}) {
    padding-bottom: 50px;
    height: 42%;
  }
`;

const DragonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 15%;
  right: 18%; /* Movido un poco más a la izquierda para separarlo de la nube derecha */
  width: 160px;
  animation: ${fly} 5s ease-in-out infinite;

  @media (max-width: ${MobileBreakpoint}) {
    top: 50px;
    right: auto;
    left: 10px;
    width: 75px;
  }
`;

const BaseCloud = styled.div`
  position: absolute;
  z-index: 1; 
  opacity: 0.9;
  animation: ${float} 6s ease-in-out infinite;
  pointer-events: none;
`;

const LeftCloud = styled(BaseCloud)`
  /* ESCRITORIO: Pegada al borde izquierdo */
  top: 18%;
  left: 2%; 
  width: 140px;

  @media (max-width: ${MobileBreakpoint}) {
    /* MÓVIL: Asomando desde fuera de la pantalla */
    top: 90px;
    left: -40px; /* Valor negativo para que solo se vea la mitad */
    width: 110px; 
    opacity: 0.8;
  }
`;

const RightCloud = styled(BaseCloud)`
  /* ESCRITORIO: Pegada al borde derecho */
  top: 28%;
  right: 2%;
  width: 120px;

  @media (max-width: ${MobileBreakpoint}) {
    /* MÓVIL: Asomando desde fuera a la derecha y más abajo */
    top: 160px;
    right: -30px; 
    width: 90px;
    opacity: 0.8;
  }
`;


const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin-bottom: 10px; 
  width: 100%;
  position: relative; /* Asegura z-index */
`;

const WallSection = styled.div`
  height: 55%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/muralla.svg");
`;

const RibbonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 20; 
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CharacterGrid = styled.div`
  display: flex;
  gap: 80px; 
  margin-top: 50px; 
  z-index: 10;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${MobileBreakpoint}) {
    gap: 15px; 
    margin-top: 40px;
  }
`;

const CharacterCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s ease;
  width: 180px; 

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${MobileBreakpoint}) {
    width: 42%; /* Un poco más ancho en móvil */
    max-width: 150px;
  }
`;

const StackedImages = styled.div`
  position: relative;
  width: 100%;
  height: 190px; 
  display: flex;
  justify-content: center; 
  align-items: flex-end; 
  
  @media (max-width: ${MobileBreakpoint}) {
    height: 140px;
  }
`;

const ArchBg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: contain;
  object-position: bottom;
`;

const CharacterImg = styled(Image)`
  position: relative;
  z-index: 2;
  width: 70%; 
  height: auto;
  margin-bottom: 30px; 
  filter: drop-shadow(0 5px 5px rgba(0,0,0,0.2)); 

  @media (max-width: ${MobileBreakpoint}) {
    margin-bottom: 20px;
  }
`;

const CharacterLabel = styled.div`
  background-color: ${Colors.StoneGrey};
  width: 100%; 
  padding: 10px 0;
  text-align: center;
  color: ${Colors.Black};
  font-weight: 900;
  font-family: ${montserrat.style.fontFamily};
  font-size: 14px; 
  letter-spacing: 1px;
  z-index: 3;
  border-radius: 4px;
  box-shadow: 0 5px 0 #999; 
  text-transform: uppercase;
  margin-top: -12px;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 11px;
    padding: 8px 0;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <SkySection>
        <LeftCloud>
          <Image 
            src="/cloud.svg" 
            width={140} 
            height={85} 
            alt="Cloud" 
            style={{ width: '100%', height: 'auto' }} 
          />
        </LeftCloud>
        <RightCloud>
          <Image 
            src="/cloud.svg" 
            width={110} 
            height={70} 
            alt="Cloud" 
            priority
            style={{ width: '100%', height: 'auto' }} 
          />
        </RightCloud>
        
        <DragonWrapper>
          <Image 
            src="/dragon.svg" 
            width={160} 
            height={120} 
            alt="Dragon" 
            style={{ width: "100%", height: "auto" }}
          />
        </DragonWrapper>

        <LogoContainer>
          <Image
            src="/main_logo.svg"
            width={550} 
            height={250}
            alt="Hack UPC"
            priority
            style={{ 
              maxWidth: "90vw", 
              maxHeight: "35vh", 
              width: "auto", 
              height: "auto" 
            }}
          />
        </LogoContainer>
      </SkySection>

      <WallSection>
        <RibbonContainer>
          <Image
            src="/choose_character.svg"
            width={450}
            height={80}
            alt="Choose Your Character"
            style={{ maxWidth: "90vw", height: "auto" }}
          />
        </RibbonContainer>

        <CharacterGrid>
          <CharacterCard href="https://my.hackupc.com/user/signup/hacker/" target="_blank">
            <StackedImages>
                <ArchBg 
                    src="/arch.svg" 
                    fill 
                    alt="Arch Background" 
                />
                <CharacterImg 
                    src="/hacker.svg" 
                    width={150} 
                    height={150} 
                    alt="Hacker" 
                />
            </StackedImages>
            <CharacterLabel>HACKER</CharacterLabel>
          </CharacterCard>

          <CharacterCard href="https://my.hackupc.com/user/signup/volunteer/" target="_blank">
            <StackedImages>
                <ArchBg 
                    src="/arch.svg" 
                    fill 
                    alt="Arch Background" 
                />
                <CharacterImg 
                    src="/volunteer.svg" 
                    width={150} 
                    height={150} 
                    alt="Volunteer" 
                />
            </StackedImages>
            <CharacterLabel>VOLUNTEER</CharacterLabel>
          </CharacterCard>
        </CharacterGrid>
      </WallSection>
    </HeroContainer>
  );
}