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
} from "@/app/genericComponents/tokens";
import { silkscreen } from "@/app/genericComponents/fonts";

const Colors = {
  Background: "#0F0F24",
  Title: "#FFD700", 
  SubText: "#FFFFFF", 
  PlayerBackground: "#1A1A36",
  PlayerText: "#00FFFF",
  VolunteerText: "#FFA500",
  ButtonBackground: "#FF0000",
  ButtonText: "#FFFFFF",
  BoxBorder: "#FFD700",
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: ${SpacingXL} 0 ${SpacingXXL} 0;
  gap: ${SpacingM};
  width: 100vw;
  background-color: ${Colors.Background};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${TitleXXL};
  color: ${Colors.Title};
  text-transform: uppercase;
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${TitleL};
  }
`;

const SubText = styled.div`
  font-size: ${TitleM};
  color: ${Colors.SubText};
  text-align: center;

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${TitleM};
  }
`;

const PlayAsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PlayerBackground};
  border: 2px solid ${Colors.BoxBorder};
  border-radius: 8px;
  padding: ${SpacingM};
  width: 80%;
  max-width: 600px;
  gap: ${SpacingS};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: ${MobileBreakpoint}) {
    width: 90%;
  }
`;

const PlayAsTitleBox = styled.div`
  color: ${Colors.Title};
  padding: ${SpacingS};
  border-radius: 8px;
  border: 2px solid ${Colors.Title};
  font-size: ${TitleM};
  font-weight: bold;
  text-align: center;
  width: 50%;
  margin-bottom: ${SpacingS};
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

const PlayerCard = styled.div<{ playerType: "hacker" | "volunteer" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PlayerBackground};
  padding: ${SpacingM};
  border: 2px solid ${Colors.BoxBorder};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  color: ${(props) =>
    props.playerType === "hacker" ? Colors.PlayerText : Colors.VolunteerText};
`;

const SurpriseButton = styled.div`
  background-color: ${Colors.ButtonBackground};
  color: ${Colors.ButtonText};
  padding: ${SpacingS} ${SpacingM};
  border-radius: 8px;
  margin-top: ${SpacingM};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${Colors.Title};
    color: ${Colors.Background};
  }
`;

export default function Hero() {
  return (
    <HeroContainer className={silkscreen.className}>
      <Title>HackUPC</Title>
      <SubText>700 Hackers | 2-4 May | 36h</SubText>
      <PlayAsContainer>
        <PlayAsTitleBox>Play as</PlayAsTitleBox>
        <PlayerContainer>
          <PlayerCard playerType="hacker">
            <Image src="/player1.png" width={100} height={100} alt="Player 1" />
            <div>Hacker</div>
          </PlayerCard>
          <PlayerCard playerType="volunteer">
            <Image
              src="/player2.png"
              width={100}
              height={100}
              alt="Player 2"
            />
            <div>Volunteer</div>
          </PlayerCard>
        </PlayerContainer>
      </PlayAsContainer>
      <SurpriseButton>Surprise</SurpriseButton>
    </HeroContainer>
  );
}
