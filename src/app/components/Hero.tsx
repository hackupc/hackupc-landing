import Image from "next/image";
import styled from "styled-components";
import {
  MaxScreenSize,
  MobileBreakpoint,
  SpacingM,
  SpacingS,
  SpacingXL,
  SpacingXXL,
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
  padding: ${SpacingXL} 0 ${SpacingXXL} 0;
  gap: ${SpacingM};
  width: 100vw;
  background-color: ${Colors.HeroNeutral};
  background-image: 
    url("/background_piece.svg"), 
    url("/pixelated_biene.svg");
  background-repeat: repeat, no-repeat;
  background-size: 
    80px 80px, 
    40px 40px;
  background-position: 
    0 0,
    50% 50%;

  animation: moveBiene 10s linear infinite;

  @keyframes moveBiene {
    0% {
      background-position: 0 0, 12% 0%;
    }
    25% {
      background-position: 0 0, 12% 50%;
    }
    50% {
      background-position: 0 0, 30% 50%;
    }
    75% {
      background-position: 0 0, 12% 50%;
    }
    100% {
      background-position: 0 0, 12% 0%;
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

const YellowDottedLine100 = styled.div`
  margin-top: ${SpacingM};
  border-top: ${SpacingXS} dotted yellow;
  width: 100%;
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

const SurpriseButton = styled.div`
  background-color: ${Colors.HeroYellow};
  color: #000000;
  padding: ${SpacingS} ${SpacingM};
  border-radius: 8px;
  margin-top: ${SpacingM};
  cursor: pointer;
  font-weight: bold;
  font-size: ${TitleS};

  &:hover {
    background-color: ${Colors.HeroBlue};
    color: #FFFFFF
  }
`;

export default function Hero() {
  return (
    <HeroContainer className={silkscreen.className}>
      <TitleContainer>
        <Title>
          <YellowDottedLine100 />
          HackUPC
          <SubText>700 Hackers | 2-4 May | 36h</SubText>
          <YellowDottedLine100 />
        </Title>
      </TitleContainer>
      <PlayAsContainer>
        <PlayAsTitleBox>Play as</PlayAsTitleBox>
        <PlayerContainer>
          <PlayerCard>
            <Image 
              src="/player1.png" 
              width={100}
              height={100}
              alt="Player 1" />
            <PlayerText>Hacker</PlayerText>
          </PlayerCard>
          <PlayerCard>
            <Image
              src="/player2.png"
              width={100}
              height={100}
              alt="Player 2"
            />
            <PlayerText>Volunteer</PlayerText>
          </PlayerCard>
        </PlayerContainer>
      </PlayAsContainer>
      <SurpriseButton>Surprise</SurpriseButton>
    </HeroContainer>
  );
}
