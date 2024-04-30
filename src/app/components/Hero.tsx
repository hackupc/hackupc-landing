import Image from "next/image";
import styled from "styled-components";
import {
  MaxScreenSize,
  MobileBreakpoint,
  MobileTitleXL,
  Primary100,
  Primary300,
  Secondary500,
  SpacingM,
  SpacingS,
  SpacingXL,
  SpacingXXL,
  TitleXXL,
} from "@/app/genericComponents/tokens";
import { SecondaryButton } from "@/app/genericComponents/Buttons";
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

export const HackUPCAniversary = styled.div`
  font-size: 42px;
  color: ${Primary300};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 22px;
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

const Comet = styled.img`
  position: absolute;
  z-index: -1;
`;

const CometRedBigDesktop = styled(Comet)`
  left: 10%;
  top: 5%;
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;
const CometRedSmallDesktop = styled(Comet)`
  right: 7%;
  top: 20%;
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;
const CometPurpleBigDesktop = styled(Comet)`
  left: 8%;
  bottom: 30%;
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;
const CometPurpleSmallDektop = styled(Comet)`
  right: 14%;
  bottom: 40%;
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;
const CometRedBigMobile = styled(Comet)`
  display: none;
  @media (max-width: ${MobileBreakpoint}) {
    left: 8%;
    top: 7%;
    display: block;
  }
`;
const CometRedSmallMobile = styled(Comet)`
  display: none;
  @media (max-width: ${MobileBreakpoint}) {
    right: 6%;
    top: 14%;
    display: block;
  }
`;

export default function Hero() {
  return (
    <div>
      <CometRedBigMobile src="/cometa_big_red_mobile.svg" alt="Big red comet" />
      <CometRedSmallMobile
        src="/cometa_small_red_mobile.svg"
        alt="Small red comet"
      />
      <CometRedBigDesktop src="/cometa_big_red.svg" alt="Big red comet" />
      <CometRedSmallDesktop src="/cometa_small_red.svg" alt="Small red comet" />
      <CometPurpleBigDesktop
        src="/cometa_big_purple.svg"
        alt="Big purple comet"
      />
      <CometPurpleSmallDektop
        src="/cometa_small_purple.svg"
        alt="Small purple comet"
      />
      <HeroContainer className={silom.className}>
        <Image src="/biene.svg" width={100} height={150} alt="biene" />
        <TextsContainer>
          <div style={{ textAlign: "center" }}>
            <HackUPCTitle>HackUPC</HackUPCTitle>
            <HackUPCAniversary>Join us on our 10th edition</HackUPCAniversary>
          </div>
          <HackUPCParticipants>750 Hackers</HackUPCParticipants>
          <HackUPCDates>May 3-5 2024 – 36 H</HackUPCDates>
        </TextsContainer>
        <ButtonsContainer>
          <SecondaryButton
            href="https://live.hackupc.com/"
            target="_blank"
            rel="noopener noreferrer"
            width="100%"
          >
            Check our live page
          </SecondaryButton>
        </ButtonsContainer>
      </HeroContainer>
    </div>
  );
}
