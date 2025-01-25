import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import {
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXL,
  SpacingXXXL,
  TitleXXL,
  TitleL,
  TitleM,
  TitleS,
  SpacingL,
  SpacingXS,
} from "@/app/genericComponents/tokens";
import { silkscreen } from "@/app/genericComponents/fonts";

const Colors = {
  HeroYellow: "#FCFC01",
  HeroBlue: "#0060BF",
  HeroNeutral: "#231F20",
  HeroBlack: "#000000",
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: ${SpacingXL} 0 ${SpacingXXXL} 0;
  gap: ${SpacingM};
  width: 100vw;
  background-color: ${Colors.HeroNeutral};
  background-image: 
    url("/background_piece.svg"), 
    url("/pixelated_biene.svg"), 
    url("/red_ghost.svg"), 
    url("/blue_ghost.svg"), 
    url("/purple_ghost.svg");
  background-repeat: repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 
    80px 80px, 
    40px 40px, 
    40px 40px, 
    40px 40px, 
    40px 40px;

  animation: moveAll 10s linear infinite;

  @keyframes moveAll {
    0% {
      background-position: 
        0 0, 
        50% 50%, 
        10% 10%, 
        90% 10%, 
        50% 90%;
    }
    25% {
      background-position: 
        0 0, 
        50% 50%, 
        10% 50%, 
        90% 50%, 
        50% 10%;
    }
    50% {
      background-position: 
        0 0, 
        50% 50%, 
        50% 50%, 
        50% 50%, 
        10% 50%;
    }
    75% {
      background-position: 
        0 0, 
        50% 50%, 
        50% 10%, 
        50% 10%, 
        10% 10%;
    }
    100% {
      background-position: 
        0 0, 
        50% 50%, 
        10% 10%, 
        90% 10%, 
        50% 90%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${TitleXXL};
  color: ${Colors.HeroYellow};
  text-transform: uppercase;
  text-align: center;
  backdrop-filter: blur(2px);

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${TitleL};
  }
`;

const TitleContainer = styled.div`
  width: 80%;
  max-width: 600px;
  border-top: ${SpacingXS} dotted yellow;
  border-bottom: ${SpacingXS} dotted yellow;
  padding-bottom: ${SpacingM};
`;

const SubText = styled.div`
  font-size: ${TitleS};
  color: ${Colors.HeroBlue};
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${TitleM};
  }
`;

const PlayAsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${Colors.HeroBlack};
  border: 2px solid ${Colors.HeroBlue};
  border-radius: 8px;
  padding: ${SpacingM};
  margin-top: ${SpacingM};
  width: 80%;
  max-width: 600px;
  gap: ${SpacingS};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: ${MobileBreakpoint}) {
    width: 90%;
  }
`;


const PlayAsTitleBox = styled.div`
  color: ${Colors.HeroYellow};
  padding: ${SpacingS};
  border-radius: 8px;
  border: 2px solid ${Colors.HeroBlue};
  font-size: ${TitleM};
  font-weight: bold;
  text-align: center;
  width: 50%;
  margin-bottom: ${SpacingS};
  margin-top: -${SpacingL};
  align-self: center;
  background-color: ${Colors.HeroBlack};
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${SpacingM};
  justify-content: center;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${SpacingM};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  color: ${Colors.HeroYellow};
`;

const PlayerText = styled.div`
  font-size: ${TitleS};
  font-weight: bold;
  margin-top: ${SpacingS};
`;

export default function Hero() {
  const [showHero, setShowHero] = useState(true);
  const [bienePosition, setBienePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        setShowHero(false);

        setBienePosition((prev) => {
          const newPos = { ...prev };
          switch (e.key) {
            case "ArrowUp":
              newPos.y = Math.max(0, prev.y - 1);
              break;
            case "ArrowDown":
              newPos.y = Math.min(100, prev.y + 1);
              break;
            case "ArrowLeft":
              newPos.x = Math.max(0, prev.x - 1);
              break;
            case "ArrowRight":
              newPos.x = Math.min(100, prev.x + 1);
              break;
          }
          return newPos;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <HeroContainer
        key={`${bienePosition.x}-${bienePosition.y}`}
        className={silkscreen.className}
        style={{
          backgroundPosition: `
          0 0, 
          ${bienePosition.x}% ${bienePosition.y}%, 
          10% 10%, 
          90% 10%, 
          50% 90%`,
          animation: showHero ? "moveAll 10s linear infinite" : "none",
        }}
      >
        <TitleContainer style={{ visibility: showHero ? "visible" : "hidden" }}>
          <Title>
            HackUPC
            <SubText>700 Hackers | 2-4 May 2025 | 36h</SubText>
          </Title>
        </TitleContainer>
        <PlayAsContainer style={{ visibility: showHero ? "visible" : "hidden" }}>
          <PlayAsTitleBox>Play as</PlayAsTitleBox>
          <PlayerContainer>
            <PlayerCard>
              <Image src="/player1.png" width={100} height={100} alt="Player 1" />
              <PlayerText>Hacker</PlayerText>
            </PlayerCard>
            <PlayerCard>
              <Image src="/player2.png" width={100} height={100} alt="Player 2" />
              <PlayerText>Volunteer</PlayerText>
            </PlayerCard>
          </PlayerContainer>
        </PlayAsContainer>
      </HeroContainer>
    </>
  );
};
