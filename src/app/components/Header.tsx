import styled from "styled-components";
import {
  BackgroundWithOpacity,
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { lora } from "../genericComponents/fonts";
import Image from "next/image";
import { BodyLink } from "@/app/genericComponents/Typography";
import { useEffect, useState } from "react";

const HackUPCRed = "#C72C2C";

const HeaderContainer = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${SpacingS} ${SpacingM};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: ${({ isScrolled }) =>
    isScrolled ? BackgroundWithOpacity : "transparent"};
`;

const ClickableLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingS};
  cursor: pointer, auto;
  color: white;
`;

const StyledBodyLink = styled(BodyLink)`
  margin-right: 150px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${HackUPCRed};
  }

  @media (max-width: ${MobileBreakpoint}) {
    margin-right: 90px;
  }
`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <ClickableLogo
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <Image
          src="/hackupcLogoWhite.svg"
          alt="hackupc-logo"
          height={30}
          width={30}
        />
        HackUPC
      </ClickableLogo>
      <StyledBodyLink
        href="https://my.hackupc.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={lora.className}
      >
        Login
      </StyledBodyLink>
    </HeaderContainer>
  );
}
