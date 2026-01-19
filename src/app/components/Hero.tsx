import Image from "next/image";
import styled, { keyframes } from "styled-components";
import {
  MobileBreakpoint,
  MobileTitleS,
  SpacingL,
  SpacingM,
  TitleS,
} from "@/app/genericComponents/tokens";
import { montserrat } from "@/app/genericComponents/fonts";

const Colors = {
  Black: "#000000",
  Grey: "#CAC9C9",
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
  min-height: 180vh;
  overflow-x: hidden;

  @media (max-width: ${MobileBreakpoint}) {
    min-height: 100vh;
  }
`;

const DragonWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 10%;
  right: 10%;
  width: 250px;
  height: 180px;
  animation: ${fly} 5s ease-in-out infinite;

  img {
    object-fit: contain;
  }

  @media (max-width: ${MobileBreakpoint}) {
    top: 120px;
    right: 10px;
    width: 100px;
    height: 80px;
  }
`;

const BaseCloud = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0.9;
  animation: ${float} 6s ease-in-out infinite;
  pointer-events: none;

  img {
    object-fit: contain;
  }
`;

const LeftCloud = styled(BaseCloud)`
  top: 33%;
  left: 2%;
  width: 180px;
  height: 100px;

  @media (max-width: ${MobileBreakpoint}) {
    top: 10%;
    left: 2%;
    width: 120px;
    height: 70px;
  }
`;

const RightCloud = styled(BaseCloud)`
  top: 38%;
  right: 4%;
  width: 200px;
  height: 110px;

  @media (max-width: ${MobileBreakpoint}) {
    top: 20%;
    right: 2%;
    width: 100px;
    height: 60px;
  }
`;

const CenterCloudLeft = styled(BaseCloud)`
  top: 15%;
  left: 22%;
  width: 230px;
  height: 120px;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

const CenterCloudRight = styled(BaseCloud)`
  top: 28%;
  right: 32%;
  width: 200px;
  height: 120px;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 3;
`;

const DesktopLogo = styled.div`
  margin-top: 260px;
  display: block;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

const MobileLogo = styled.div`
  display: none;

  @media (max-width: ${MobileBreakpoint}) {
    margin-top: 220px;
    display: block;
  }
`;

const CharactersSection = styled.div`
  position: relative;
  margin-top: 620px;
  margin-bottom: ${SpacingL};
  z-index: 3;

  @media (max-width: ${MobileBreakpoint}) {
    margin: ${SpacingM};
  }
`;

const RibbonContainer = styled.div`
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${MobileBreakpoint}) {
    top: -60px;
  }
`;

const RibbonImageWrapper = styled.div`
  position: relative;
  width: clamp(280px, 90vw, 480px);
  aspect-ratio: 45 / 8;
`;

const CharacterGrid = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 100px;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${MobileBreakpoint}) {
    gap: 70px;
    margin-top: 220px;
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
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2));

  @media (max-width: ${MobileBreakpoint}) {
    margin-bottom: 20px;
  }
`;

const CharacterLabel = styled.div`
  background-color: ${Colors.Grey};
  width: 100%;
  padding: 10px 0;
  text-align: center;
  color: ${Colors.Black};
  font-family: ${montserrat.style.fontFamily};
  font-size: ${TitleS};
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 4px;
  box-shadow: 0 5px 0 #999;
  text-transform: uppercase;
  margin-top: -12px;
  z-index: 2;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleS};
    padding: 8px 0;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <LeftCloud>
        <Image src="/cloud.svg" fill alt="Cloud" />
      </LeftCloud>

      <CenterCloudLeft>
        <Image src="/cloud.svg" fill alt="Cloud" />
      </CenterCloudLeft>

      <CenterCloudRight>
        <Image src="/cloud.svg" fill alt="Cloud" />
      </CenterCloudRight>

      <RightCloud>
        <Image src="/cloud.svg" fill alt="Cloud" />
      </RightCloud>

      <DragonWrapper>
        <Image src="/dragon.svg" fill alt="Dragon" />
      </DragonWrapper>

      <LogoContainer>
        <DesktopLogo>
          <Image
            src="/main_logo_desktop.svg"
            width={700}
            height={260}
            alt="Hack UPC"
            priority
            style={{ maxWidth: "90vw", height: "auto" }}
          />
        </DesktopLogo>

        <MobileLogo>
          <Image
            src="/main_logo.svg"
            width={550}
            height={250}
            alt="Hack UPC"
            priority
            style={{ maxWidth: "90vw", height: "auto" }}
          />
        </MobileLogo>
      </LogoContainer>

      <CharactersSection>
        <RibbonContainer>
          <RibbonImageWrapper>
            <Image
              src="/choose_character.svg"
              fill
              alt="Choose Your Character"
              style={{ objectFit: "contain" }}
            />
          </RibbonImageWrapper>
        </RibbonContainer>

        <CharacterGrid>
          <CharacterCard
            href="https://my.hackupc.com/user/signup/hacker/"
            target="_blank"
          >
            <StackedImages>
              <ArchBg src="/arch.svg" fill alt="Arch" />
              <CharacterImg
                src="/hacker.svg"
                width={150}
                height={150}
                alt="Hacker"
              />
            </StackedImages>
            <CharacterLabel>HACKER</CharacterLabel>
          </CharacterCard>

          <CharacterCard
            href="https://my.hackupc.com/user/signup/volunteer/"
            target="_blank"
          >
            <StackedImages>
              <ArchBg src="/arch.svg" fill alt="Arch" />
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
      </CharactersSection>
    </HeroContainer>
  );
}
