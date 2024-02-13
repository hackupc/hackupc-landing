import styled from "styled-components";
import {
  BackgroundWithOpacity,
  MobileBreakpoint,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import Image from "next/image";
import { BodyLink } from "@/app/genericComponents/Typography";
import { useEffect, useState } from "react";

const HeaderContainer = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${SpacingS} ${SpacingM};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: ${({ isScrolled }) =>
    isScrolled ? BackgroundWithOpacity : "transparent"};
`;

const ClickableLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingS};
  cursor: url("/rocket-fire.png"), auto;
`;

const StyledBodyLink = styled(BodyLink)`
  margin-right: 150px;

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

    // Cleanup listener on unmount
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
      >
        Login
      </StyledBodyLink>
    </HeaderContainer>
  );
}
