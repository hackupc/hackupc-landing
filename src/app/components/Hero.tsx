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
    32px 32px, 
    32px 32px, 
    32px 32px, 
    32px 32px;

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
  const [bienePosition, setBienePosition] = useState({ x: 128, y: 128 });
  const [ghostPositions, setGhostPositions] = useState([
    { x: 64 * 0, y: 64 * 10 }, // red
    { x: 64 * 6, y: 64 * 6 },  // blue
    { x: 64 * 10, y: 64 * 10 }, // purple
  ]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        setShowHero(false);
        const screenW = window.innerWidth - 80;
        const screenH = window.innerHeight - 64;
        
        setBienePosition((prev) => {
          const newPos = { ...prev };
          switch (e.key) {
            case "ArrowUp":
              newPos.y = Math.max(64, prev.y - 80);
              break;
              case "ArrowDown":
                newPos.y = Math.min(screenH, prev.y + 80);
                break;
                case "ArrowLeft":
                  newPos.x = Math.max(64, prev.x - 80);
                  break;
                  default: // ArrowRight
                  newPos.x = Math.min(screenW, prev.x + 80);
                  break;
                }
                return newPos;
              });
            }
          };

          window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const screenW = window.innerWidth - 80;
      const screenH = window.innerHeight - 64;
      setGhostPositions((prevPositions) =>
        prevPositions.map((pos) => {
          const direction = Math.floor(Math.random() * 4);
          const newPos = { ...pos };
          switch (direction) {
            case 0: // up
              newPos.y = Math.max(64, pos.y - 80);
              break;
            case 1: // down
              newPos.y = Math.min(screenH, pos.y + 80);
              break;
            case 2: // left
              newPos.x = Math.max(64, pos.x - 80);
              break;
            default: // right
              newPos.x = Math.min(screenW, pos.x + 80);
              break;
          }
          return newPos;
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroContainer
        key={`${bienePosition.x}-${bienePosition.y}`}
        className={silkscreen.className}
        style={{
          backgroundPosition: `
          0 0, 
          ${bienePosition.x}px ${bienePosition.y}px, 
          ${ghostPositions[0].x}px ${ghostPositions[0].y}px, 
          ${ghostPositions[1].x}px ${ghostPositions[1].y}px, 
          ${ghostPositions[2].x}px ${ghostPositions[2].y}px,
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
}

