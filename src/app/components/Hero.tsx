import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { MobileBreakpoint } from "@/app/genericComponents/tokens";
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
  width: 100vw;
  min-height: 120vh;
  background-color: ${Colors.SkyBlue};
  overflow-x: hidden;

  @media (max-width: ${MobileBreakpoint}) {
    min-height: 100vh;
  }
`;

const SkySection = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  padding-bottom: 80px;

  @media (max-width: ${MobileBreakpoint}) {
    height: 58vh;
    padding-bottom: 60px;
  }
`;

const DragonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 15%;
  right: 18%;
  width: 250px;
  animation: ${fly} 5s ease-in-out infinite;

  @media (max-width: ${MobileBreakpoint}) {
    top: 120px;      
    right: 10px;     
    left: auto;
    width: 105px;
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
  top: 48%;
  left: 2%;
  width: 140px;

  @media (max-width: ${MobileBreakpoint}) { 
    left: -40px;
    width: 110px;
  }
`;

const RightCloud = styled(BaseCloud)`
  top: 38%;
  right: 2%;
  width: 120px;

  @media (max-width: ${MobileBreakpoint}) {
  top: 58%;
    right: -30px;
    width: 90px;
  }
`;

const CenterCloudLeft = styled(BaseCloud)`
  top: 22%;
  left: 32%;
  width: 180px;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;    
  }
`;

const CenterCloudRight = styled(BaseCloud)`
  top: 60%;
  right: 20%;
  width: 115px;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;    
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  width: 100%;
`;

const WallSection = styled.div`
  min-height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/muralla.svg");
  background-repeat: repeat-x;
  padding-top: 120px;

  @media (max-width: ${MobileBreakpoint}) {
    min-height: 50vh;
  }
`;

const RibbonContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CharacterGrid = styled.div`
  display: flex;
  gap: 100px;
  margin-top: 120px;
  z-index: 1;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${MobileBreakpoint}) {
    gap: 20px;
    margin-top: 80px;
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
    width: 42%;
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
  inset: 0;
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
  z-index: 1;
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
          <Image src="/cloud.svg" width={140} height={85} alt="Cloud" />
        </LeftCloud>

        <CenterCloudLeft>
          <Image src="/cloud.svg" width={180} height={95} alt="Cloud" />
        </CenterCloudLeft>

        <CenterCloudRight>
          <Image src="/cloud.svg" width={120} height={70} alt="Cloud" />
        </CenterCloudRight>

        <RightCloud>
          <Image src="/cloud.svg" width={110} height={70} alt="Cloud" />
        </RightCloud>

        <DragonWrapper>
          <Image src="/dragon.svg" width={160} height={120} alt="Dragon" />
        </DragonWrapper>

        <LogoContainer>
          <Image
            src="/main_logo.svg"
            width={550}
            height={250}
            alt="Hack UPC"
            priority
            style={{ maxWidth: "90vw", height: "auto" }}
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
              <ArchBg src="/arch.svg" fill alt="Arch" />
              <CharacterImg src="/hacker.svg" width={150} height={150} alt="Hacker" />
            </StackedImages>
            <CharacterLabel>HACKER</CharacterLabel>
          </CharacterCard>

          <CharacterCard href="https://my.hackupc.com/user/signup/volunteer/" target="_blank">
            <StackedImages>
              <ArchBg src="/arch.svg" fill alt="Arch" />
              <CharacterImg src="/volunteer.svg" width={150} height={150} alt="Volunteer" />
            </StackedImages>
            <CharacterLabel>VOLUNTEER</CharacterLabel>
          </CharacterCard>
        </CharacterGrid>
      </WallSection>
    </HeroContainer>
  );
}
