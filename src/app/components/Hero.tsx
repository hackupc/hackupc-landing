import Image from "next/image";
import styled from "styled-components";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXL,
  TitleS,
  SpacingL,
  SpacingXXS,
} from "@/app/genericComponents/tokens";
import { montserrat, lora } from "@/app/genericComponents/fonts";

const Colors = {
  SkyBlue: "#AADEFE",
  MedievalGreen: "#75AA7E",
  Black: "#000000",
};

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.SkyBlue};
`;

const SkySection = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: ${SpacingL};
`;

const WallSection = styled.div`
  height: 60%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-image: url("/muralla.svg");

`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

const MainLogo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${SpacingS};
  
  h1 {
    font-size: 80px;
    line-height: 0.8;
    color: ${Colors.Black};
    margin: 0;
    font-family: ${lora.style.fontFamily};
  }

  span {
    font-size: 60px;
    font-weight: bold;
    color: ${Colors.Black};
    font-family: ${lora.style.fontFamily};
  }
`;

const AnniversaryBanner = styled.div`
  background-color: ${Colors.MedievalGreen};
  color: ${Colors.Black};
  padding: ${SpacingXXS} ${SpacingM};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
  margin-top: ${SpacingS};
  font-weight: bold;
  font-family: ${montserrat.style.fontFamily};
  font-size: ${TitleS};
`;

const CharacterGrid = styled.div`
  display: flex;
  gap: ${SpacingXL};
  margin-top: ${SpacingXL};
  z-index: 3;
  width: 90%;
  max-width: 800px;
  justify-content: center;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const CharacterCard = styled.a`
  flex: 1;
  max-width: 250px;
  height: 400px;
  background-color: #BFB39A;
  border-radius: 120px 120px 0 0;
  padding: ${SpacingXL};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s;
  box-shadow: inset 0 0 40px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    height: 300px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(0,0,0,0.15);
    z-index: 1;
  }
`;

const CharacterLabel = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  text-align: center;
  color: ${Colors.Black};
  font-weight: bold;
  font-family: ${montserrat.style.fontFamily};
  z-index: 2;
  font-size: ${TitleS};
`;

const CharacterIconWrapper = styled.div`
  margin-top: -40px;
  z-index: 2;

  @media (max-width: ${MobileBreakpoint}) {
    margin-top: -20px;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <SkySection>
        <LogoContainer>
          <MainLogo>
            <span>HACK UPC</span>
          </MainLogo>
          <AnniversaryBanner>
            <span>10 YEARS</span>
            <span>April 24-26th 2026</span>
          </AnniversaryBanner>
        </LogoContainer>
      </SkySection>

      <WallSection>
        <span>Choose your character</span>
        <CharacterGrid>
          <CharacterCard href="https://my.hackupc.com/user/signup/hacker/" target="_blank">
            <CharacterIconWrapper>
              <Image src="/blue_ghost.svg" width={140} height={140} alt="Hacker" />
            </CharacterIconWrapper>
            <CharacterLabel>HACKER</CharacterLabel>
          </CharacterCard>

          <CharacterCard href="https://my.hackupc.com/user/signup/volunteer/" target="_blank">
            <CharacterIconWrapper>
              <Image src="/orange_ghost.svg" width={140} height={140} alt="Volunteer" />
            </CharacterIconWrapper>
            <CharacterLabel>VOLUNTEER</CharacterLabel>
          </CharacterCard>
        </CharacterGrid>
      </WallSection>
    </HeroContainer>
  );
}
