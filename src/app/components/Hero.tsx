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

// --- ANIMACIONES ---
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

// --- ESTILOS GENERALES ---

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

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${SpacingM} ${SpacingXL};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 40;
  font-family: ${montserrat.style.fontFamily};
  font-weight: 800;
  color: #333;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS} ${SpacingM};
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.5px;
  &:hover { opacity: 0.7; }
`;

const MLHBadge = styled.a`
  position: absolute;
  top: 0;
  right: 100px;
  width: 60px;
  z-index: 50;
  
  @media (max-width: ${MobileBreakpoint}) {
    right: ${SpacingM};
    width: 45px;
  }
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
    padding-bottom: 60px;
  }
`;

// --- ELEMENTOS DECORATIVOS ---

const DragonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 15%;
  right: 15%;
  width: 160px;
  animation: ${fly} 5s ease-in-out infinite;

  @media (max-width: ${MobileBreakpoint}) {
    top: 70px;
    right: auto;
    left: 20px;
    width: 80px;
  }
`;

const BaseCloud = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0.9;
  animation: ${float} 6s ease-in-out infinite;
`;

const LeftCloud = styled(BaseCloud)`
  top: 20%;
  left: 15%; 
  width: 140px;

  @media (max-width: ${MobileBreakpoint}) {
    top: 100px;
    left: 5%; 
    width: 100px;
    opacity: 0.8;
  }
`;

const RightCloud = styled(BaseCloud)`
  top: 30%;
  right: 25%;
  width: 100px;

  @media (max-width: ${MobileBreakpoint}) {
    top: 140px;
    right: 5%;
    width: 80px;
  }
`;

// --- RESTO DE COMPONENTES ---

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  margin-bottom: 10px; 
  width: 100%;
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
    gap: 20px; 
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
    width: 40%; 
    max-width: 140px;
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
        {/* CORRECCIÓN NUBES: Aumentamos el height y añadimos objectFit */}
        <LeftCloud>
          <Image 
            src="/cloud.svg" 
            width={140} 
            height={100} /* Aumentado de 70 a 100 */
            alt="Cloud" 
            style={{ width:'100%', height:'auto', objectFit: 'contain' }} 
          />
        </LeftCloud>
        
        <RightCloud>
          <Image 
            src="/cloud.svg" 
            width={100} 
            height={80} /* Aumentado de 50 a 80 */
            alt="Cloud" 
            style={{ width:'100%', height:'auto', objectFit: 'contain' }} 
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