import styled from "styled-components";
import {
  MaxScreenSize,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import Image from "next/image";
import { BodyLink } from "@/app/genericComponents/Fonts";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${SpacingS} ${SpacingM};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const ClickableLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${SpacingS};
  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderContainer>
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
      <BodyLink
        href="https://my.hackupc.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Login
      </BodyLink>
    </HeaderContainer>
  );
}
