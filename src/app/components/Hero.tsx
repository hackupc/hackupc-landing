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
  TitleM,
  TitleS,
  SpacingL,
  SpacingXS,
  TitleXL,
} from "@/app/genericComponents/tokens";
import { montserrat, lora } from "@/app/genericComponents/fonts";

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
  background-image: url("/background_piece.svg"), url("/biene_pacman.svg"),
    url("/green_ghost.svg"), url("/red_ghost.svg"), url("/orange_ghost.svg"),
    url("/white_ghost.svg"), url("/blue_ghost.svg"), url("/purple_ghost.svg"),
    url("/hackupcLogoWhite.svg");

  background-repeat: repeat, no-repeat, no-repeat, no-repeat, no-repeat,
    no-repeat, no-repeat, no-repeat, no-repeat;
  background-size:
    80px 80px,
    32px 32px,
    32px 32px,
    32px 32px,
    32px 32px,
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
        ${-16 + 80 * 5}px ${-16 + 80 * 3}px,
        ${-16 + 80 * 6}px ${-16 + 80 * 9}px,
        ${-16 + 80 * 7}px ${-16 + 80 * 10}px,
        ${-16 + 80 * 18}px ${-16 + 80 * 2}px,
        ${-16 + 80 * 18}px ${-16 + 80 * 8}px,
        ${-16 + 80 * 22}px ${-16 + 80 * 5}px,
        50% 50%;
    }
    25% {
      background-position:
        0 0,
        55% 55%,
        ${-16 + 80 * 7}px ${-16 + 80 * 3}px,
        ${-16 + 80 * 6}px ${-16 + 80 * 7}px,
        ${-16 + 80 * 5}px ${-16 + 80 * 10}px,
        ${-16 + 80 * 20}px ${-16 + 80 * 2}px,
        ${-16 + 80 * 20}px ${-16 + 80 * 8}px,
        ${-16 + 80 * 22}px ${-16 + 80 * 7}px,
        50% 45%;
    }
    50% {
      background-position:
        0 0,
        60% 60%,
        ${-16 + 80 * 9}px ${-16 + 80 * 3}px,
        ${-16 + 80 * 6}px ${-16 + 80 * 5}px,
        ${-16 + 80 * 5}px ${-16 + 80 * 8}px,
        ${-16 + 80 * 22}px ${-16 + 80 * 2}px,
        ${-16 + 80 * 20}px ${-16 + 80 * 10}px,
        ${-16 + 80 * 22}px ${-16 + 80 * 9}px,
        45% 50%;
    }
    75% {
      background-position:
        0 0,
        55% 45%,
        ${-16 + 80 * 7}px ${-16 + 80 * 3}px,
        ${-16 + 80 * 6}px ${-16 + 80 * 7}px,
        ${-16 + 80 * 5}px ${-16 + 80 * 10}px,
        ${-16 + 80 * 20}px ${-16 + 80 * 2}px,
        ${-16 + 80 * 20}px ${-16 + 80 * 8}px,
        ${-16 + 80 * 22}px ${-16 + 80 * 7}px,
        50% 55%;
    }
    100% {
      background-position:
        0 0,
        50% 50%,
        ${-16 + 80 * 5}px ${-16 + 80 * 3}px,
        ${-16 + 80 * 6}px ${-16 + 80 * 9}px,
        ${-16 + 80 * 7}px ${-16 + 80 * 10}px,
        ${-16 + 80 * 18}px ${-16 + 80 * 2}px,
        ${-16 + 80 * 18}px ${-16 + 80 * 8}px,
        ${-16 + 80 * 22}px ${-16 + 80 * 5}px,
        50% 50%;
    }
  }

  @media (max-width: ${MobileBreakpoint}) {
    @keyframes moveAll {
      0% {
        background-position:
          0 0,
          50% 50%,
          ${-16 + 80 * 2}px ${-16 + 80 * 1}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 4}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 5}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 12}px,
          ${-16 + 80 * 1}px ${-16 + 80 * 13}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 2}px,
          50% 50%;
      }
      25% {
        background-position:
          0 0,
          55% 55%,
          ${-16 + 80 * 3}px ${-16 + 80 * 1}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 3}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 5}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 14}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 13}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 3}px,
          50% 45%;
      }
      50% {
        background-position:
          0 0,
          60% 60%,
          ${-16 + 80 * 4}px ${-16 + 80 * 1}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 2}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 4}px,
          ${-16 + 80 * 1}px ${-16 + 80 * 14}px,
          ${-16 + 80 * 4}px ${-16 + 80 * 13}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 4}px,
          45% 50%;
      }
      75% {
        background-position:
          0 0,
          55% 45%,
          ${-16 + 80 * 3}px ${-16 + 80 * 1}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 3}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 5}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 14}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 13}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 3}px,
          50% 55%;
      }
      100% {
        background-position:
          0 0,
          50% 50%,
          ${-16 + 80 * 2}px ${-16 + 80 * 1}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 4}px,
          ${-16 + 80 * 4}px ${-16 + 80 * 5}px,
          ${-16 + 80 * 3}px ${-16 + 80 * 12}px,
          ${-16 + 80 * 1}px ${-16 + 80 * 13}px,
          ${-16 + 80 * 2}px ${-16 + 80 * 2}px,
          50% 50%;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: ${TitleXXL};
  color: ${Colors.HeroYellow};
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${TitleXL};
  }
`;

const TitleContainer = styled.div`
  margin-top: ${SpacingM};
  width: 80%;
  max-width: 600px;
  border-top: ${SpacingXS} dotted yellow;
  border-bottom: ${SpacingXS} dotted yellow;
  padding-bottom: ${SpacingM};
  padding-top: ${SpacingM};
  backdrop-filter: blur(2px);
`;

const SubText = styled.div`
  font-size: ${TitleS};
  color: ${Colors.HeroYellow};
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${TitleS};
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
  box-shadow: 0px 20px 4px 4px rgba(0, 0, 0, 0.3);

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

  @media (max-width: ${MobileBreakpoint}) {
    width: 70%;
  }
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

const PlayerCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${SpacingM};
  border-radius: 8px;
  border: 2px dotted ${Colors.HeroBlue};
  min-width: 50%;
  text-align: center;
  cursor: pointer;
  color: ${Colors.HeroYellow};

  &:hover {
    background-color: ${Colors.HeroYellow};
    color: ${Colors.HeroBlack};
  }

  @media (max-width: ${MobileBreakpoint}) {
    min-width: 100%;
  }
`;

const PlayerText = styled.div`
  font-size: ${TitleM};
  font-weight: bold;
  margin-top: ${SpacingS};
`;

export default function Hero() {
  const [showHero, setShowHero] = useState(true);
  const [bienePosition, setBienePosition] = useState({ x: 64, y: 64 });
  const [animatedPosition, setAnimatedPosition] = useState({ x: 64, y: 64 });
  const [ghostPositions, setGhostPositions] = useState([
    { x: -16 + 80 * 5, y: -16 + 80 * 3 }, // green
    { x: -16 + 80 * 6, y: -16 + 80 * 9 }, // red
    { x: -16 + 80 * 7, y: -16 + 80 * 10 }, // orange
    { x: -16 + 80 * 8, y: -16 + 80 * 6 }, // white
    { x: -16 + 80 * 9, y: -16 + 80 * 8 }, // pink
    { x: -16 + 80 * 10, y: -16 + 80 * 5 }, // purple
  ]);

  const [spriteIndex, setSpriteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpriteIndex((prev) => (prev === 0 ? 1 : 0));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const [logoPositions, setLogoPositions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 16; i++) {
      positions.push({
        x: -16 + Math.floor(Math.random() * 10) * 80,
        y: -16 + Math.floor(Math.random() * 10) * 80,
      });
    }
    return positions;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        return; // To allow the game to be played, remove this line.
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

          setAnimatedPosition(newPos);

          setLogoPositions((logos) =>
            logos.filter((logo) => logo.x !== newPos.x || logo.y !== newPos.y),
          );

          setGhostPositions((ghosts) =>
            ghosts.map((ghost) => {
              if (ghost.x === newPos.x && ghost.y === newPos.y) {
                // alert("Sadly, you lost! We hope HackUPC awaits more luck for you!"); --> Alert not working, it's throwing 1000 alerts per second
                setShowHero(true);
              }
              return ghost;
            }),
          );

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
        }),
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroContainer
        key={
          showHero ? `${bienePosition.x}-${bienePosition.y}` : `${spriteIndex}`
        }
        className={lora.className}
        style={{
          backgroundPosition: `
          0 0, 
          ${animatedPosition.x}px ${animatedPosition.y}px,
          ${ghostPositions[0].x}px ${ghostPositions[0].y}px, 
          ${ghostPositions[1].x}px ${ghostPositions[1].y}px, 
          ${ghostPositions[2].x}px ${ghostPositions[2].y}px,
          ${ghostPositions[3].x}px ${ghostPositions[3].y}px,
          ${ghostPositions[4].x}px ${ghostPositions[4].y}px,
          ${ghostPositions[5].x}px ${ghostPositions[5].y}px,
          ${logoPositions.map((logo) => `${logo.x}px ${logo.y}px`).join(", ")}`,
          backgroundImage: ` 
          url("/background_piece.svg"), 
          url(${spriteIndex === 0 ? "/biene_pacman.svg" : "/biene_pacman_2.svg"
            }), 
          url("/green_ghost.svg"), 
          url("/red_ghost.svg"), 
          url("/orange_ghost.svg"), 
          url("/white_ghost.svg"), 
          url("/blue_ghost.svg"), 
          url("/purple_ghost.svg"),
          url("/hackupcLogoWhite.svg"); `,
          animation: showHero ? "moveAll 10s linear infinite" : "none",
          transition: "background-position 0.3s ease-in-out",
        }}
      >
        <TitleContainer style={{ visibility: showHero ? "visible" : "hidden" }}>
          <Title className={lora.className}>
            HackUPC
            <SubText className={montserrat.className}>
              700 Hackers | 2-4 May 2025 | 36h
            </SubText>
          </Title>
        </TitleContainer>
        <PlayAsContainer
          style={{ visibility: showHero ? "visible" : "hidden" }}
        >
          <PlayAsTitleBox className={lora.className}>Play as</PlayAsTitleBox>
          <PlayerContainer>
            <PlayerCard
              href="https://my.hackupc.com/user/signup/hacker/"
              target="_blank"
            >
              <Image
                src="/blue_ghost.svg"
                width={125}
                height={125}
                alt="Player 1"
              />
              <PlayerText>Hacker</PlayerText>
            </PlayerCard>
            <PlayerCard
              href="https://my.hackupc.com/user/signup/volunteer/"
              target="_blank"
            >
              <Image
                src="/orange_ghost.svg"
                width={125}
                height={125}
                alt="Player 2"
              />
              <PlayerText>Volunteer</PlayerText>
            </PlayerCard>
          </PlayerContainer>
        </PlayAsContainer>
      </HeroContainer>
    </>
  );
}
