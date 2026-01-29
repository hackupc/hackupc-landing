import Image from "next/image";
import styled, { keyframes } from "styled-components";
import {
  MaxScreenSize,
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

const flyRoundTrip = keyframes`
  0% { transform: translateX(20vw) translateY(20px) scaleX(1); }
  12% { transform: translateX(-15vw) translateY(-20px) scaleX(1); }
  25% { transform: translateX(-50vw) translateY(-40px) scaleX(1); }
  37% { transform: translateX(-85vw) translateY(-10px) scaleX(1); }
  49.9% { transform: translateX(-120vw) translateY(60px) scaleX(1); } 
  50% { transform: translateX(-120vw) translateY(60px) scaleX(-1); }
  62% { transform: translateX(-85vw) translateY(-10px) scaleX(-1); }
  75% { transform: translateX(-50vw) translateY(-40px) scaleX(-1); }
  87% { transform: translateX(-15vw) translateY(-20px) scaleX(-1); }
  100% { transform: translateX(20vw) translateY(20px) scaleX(-1); }
`;

const flapVisible = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`;

const flapHidden = keyframes`
  0%, 50% { opacity: 0; }
  50.01%, 100% { opacity: 1; }
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${MaxScreenSize};
  margin: 0 auto;
`;

const DragonViewport = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 0;
  height: 0;
  z-index: 2;

  @media (max-width: ${MobileBreakpoint}) {
    top: 120px;
  }
`;

const DragonWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 180px;
  animation: ${flyRoundTrip} 40s linear infinite;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100px;
    height: 80px;
  }
`;

const DragonFrame = styled.div`
  position: absolute;
  inset: 0;

  img {
    object-fit: contain;
  }

  &:first-child {
    animation: ${flapVisible} 0.4s steps(1) infinite;
  }

  &:last-child {
    animation: ${flapHidden} 0.4s steps(1) infinite;
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
  top: 33%;
  left: 2%;
  width: 180px;
  height: 100px;
`;

const RightCloud = styled(BaseCloud)`
  top: 38%;
  right: 4%;
  width: 200px;
  height: 110px;
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
  margin-top: 520px;
  margin-bottom: ${SpacingL};
  z-index: 3;

  @media (max-width: ${MobileBreakpoint}) {
    margin: ${SpacingM};
  }
`;

const RibbonContainer = styled.div`
  position: absolute;
  top: -130px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: ${MobileBreakpoint}) {
    top: -70px;
  }
`;

const RibbonImageWrapper = styled.div`
  position: relative;
  width: clamp(320px, 95vw, 620px);
  aspect-ratio: 45 / 8;

  @media (max-width: ${MobileBreakpoint}) {
    width: clamp(360px, 100vw, 620px);
    aspect-ratio: 45 / 6;
  }
`;

const CharacterGrid = styled.div`
  display: flex;
  gap: 75px;
  margin-top: 100px;
  justify-content: center;

  @media (max-width: ${MobileBreakpoint}) {
    gap: 40px;
    margin-top: 220px;
  }
`;

const CharacterCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  cursor: not-allowed;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover div[data-coming-soon] {
    opacity: 1;
  }

  @media (max-width: ${MobileBreakpoint}) {
    width: 150px;
    flex: 0 0 150px;
  }
`;

const ComingSoon = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(1px);
  color: ${Colors.Black};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${montserrat.style.fontFamily};
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.25s ease;
  z-index: 5;

  border-top-left-radius: 160px;
  border-top-right-radius: 160px;

  clip-path: polygon(
    0% 100%,
    100% 100%,
    90% 12%,
    75% 0%,
    50% -4%,
    25% 0%,
    10% 12%
  );

  @media (max-width: ${MobileBreakpoint}) {
    inset: auto 0 0 0;
    height: 85%;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    letter-spacing: 1px;
    font-size: 14px;
  }
`;

const StackedImages = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
    <>
      <DragonViewport>
        <DragonWrapper>
          <DragonFrame>
            <Image src="/drac_1.svg" fill alt="Dragon Frame 1" />
          </DragonFrame>
          <DragonFrame>
            <Image src="/drac_2.svg" fill alt="Dragon Frame 2" />
          </DragonFrame>
        </DragonWrapper>
      </DragonViewport>

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

        <LogoContainer>
          <DesktopLogo>
            <Image
              src="/main_logo_desktop.svg"
              width={700}
              height={260}
              alt="Hack UPC"
            />
          </DesktopLogo>

          <MobileLogo>
            <Image
              src="/main_logo.svg"
              width={374}
              height={170}
              alt="Hack UPC"
            />
          </MobileLogo>
        </LogoContainer>

        <CharactersSection>
          <RibbonContainer>
            <RibbonImageWrapper>
              <Image src="/choose_character.svg" fill alt="Choose character" />
            </RibbonImageWrapper>
          </RibbonContainer>

          <CharacterGrid>
            <CharacterCard>
              <StackedImages>
                <ArchBg src="/arch.svg" fill alt="Arch" />
                <CharacterImg
                  src="/cavaller.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </StackedImages>
              <CharacterLabel>HACKER</CharacterLabel>
              <ComingSoon data-coming-soon>Coming soon</ComingSoon>
            </CharacterCard>

            <CharacterCard>
              <StackedImages>
                <ArchBg src="/arch.svg" fill alt="Arch" />
                <CharacterImg
                  src="/princesa.svg"
                  width={150}
                  height={150}
                  alt=""
                />
              </StackedImages>
              <CharacterLabel>VOLUNTEER</CharacterLabel>
              <ComingSoon data-coming-soon>Coming soon</ComingSoon>
            </CharacterCard>
          </CharacterGrid>
        </CharactersSection>
      </HeroContainer>
    </>
  );
}
