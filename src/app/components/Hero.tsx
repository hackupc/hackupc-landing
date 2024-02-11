import Image from "next/image";
import styled from "styled-components";
import {
  MaxScreenSize,
  MobileBreakpoint,
  MobileTitleXL,
  Primary100,
  Secondary500,
  SpacingM,
  SpacingS,
  SpacingXL,
  SpacingXXL,
  TitleXXL,
} from "@/app/genericComponents/tokens";
import {
  PrimaryButton,
  SecondaryButton,
} from "@/app/genericComponents/Buttons";
import { silom } from "@/app/genericComponents/fonts";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: ${SpacingXL} 0 ${SpacingXXL} 0;
  gap: ${SpacingM};
  max-width: ${MaxScreenSize};
`;

export const HackUPCTitle = styled.h1`
  font-size: ${TitleXXL};
  text-transform: uppercase;
  color: ${Primary100};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleXL};
  }
`;

const HackUPCParticipants = styled.div`
  font-size: 55px;
  text-transform: uppercase;
  color: ${Secondary500};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 35px;
  }
`;

const HackUPCDates = styled.div`
  font-size: 42px;
  color: ${Primary100};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 22px;
  }
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SpacingS};
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SpacingS};

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    padding: 0 ${SpacingS};
  }
`;

export default function Hero() {
  return (
    <HeroContainer className={silom.className}>
      <Image src="/biene.svg" width={100} height={150} alt="biene" />
      <TextsContainer>
        <HackUPCTitle>HackUPC</HackUPCTitle>
        <HackUPCParticipants>750 Hackers</HackUPCParticipants>
        <HackUPCDates>May 3-5 2024 – 36 H</HackUPCDates>
      </TextsContainer>
      <ButtonsContainer>
        <SecondaryButton
          href="https://my.hackupc.com/user/signup/"
          target="_blank"
          rel="noopener noreferrer"
          width="100%"
        >
          Apply as Hacker
        </SecondaryButton>
        <PrimaryButton
          href="https://my.hackupc.com/user/signup/volunteer/"
          target="_blank"
          rel="noopener noreferrer"
          width="100%"
          style={{ marginTop: 0 }}
        >
          Apply as Volunteer
        </PrimaryButton>
      </ButtonsContainer>
    </HeroContainer>
  );
}
