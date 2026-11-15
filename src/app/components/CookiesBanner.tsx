"use client";

import { useState, useSyncExternalStore } from "react";
import "../globals.css";
import styled from "styled-components";
import {
  MaxScreenSize,
  SpacingL,
  SpacingM,
  SpacingS,
} from "@/app/genericComponents/tokens";
import { Body, BodyLink } from "@/app/genericComponents/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CookiesContainer = styled.div`
  position: fixed;
  max-width: ${MaxScreenSize};
  z-index: 100;
  right: ${SpacingL};
  bottom: ${SpacingM};
  left: ${SpacingL};
  display: flex;
  gap: ${SpacingS};
  align-items: center;
  justify-content: space-between;
  padding: ${SpacingS} ${SpacingM};
  border: solid 3px #7f27a2;
  border-radius: 16px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0.25rem 1rem rgb(0 0 0 / 30%);
  color: #7f27a2;
  transition:
    transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media (max-width: ${MaxScreenSize}) {
    right: ${SpacingS};
    bottom: ${SpacingM};
    left: ${SpacingS};
    padding: ${SpacingS};
  }
`;

const TextContainer = styled.div`
  display: flex;
  gap: ${SpacingS};
  align-items: center;
`;

const StyledButton = styled(FontAwesomeIcon)`
  cursor: pointer, auto;
  padding: ${SpacingS};
`;

const subscribeToStorage = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

export default function CookiesBanner() {
  // Read the consent from localStorage on the client. On the server (and in the
  // prerendered HTML) we report it as accepted so the banner is not rendered.
  const cookiesAccepted = useSyncExternalStore(
    subscribeToStorage,
    () => window.localStorage.getItem("cookies") === "1",
    () => true,
  );
  const [isDismissed, setIsDismissed] = useState(false);

  const handleClose = () => {
    window.localStorage.setItem("cookies", "1"); // Mark as accepted
    setIsDismissed(true); // Hide the notice
  };

  if (cookiesAccepted || isDismissed) {
    return null;
  }

  return (
    <CookiesContainer id="gdpr">
      <TextContainer>
        <Body>🍪</Body>
        <Body>
          By browsing our website, you consent to the use of cookies and agree
          to our{" "}
          <BodyLink
            href="https://legal.hackersatupc.org/hackupc/privacy_and_cookies"
            hrefLang="en"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </BodyLink>
          .
        </Body>
      </TextContainer>

      <StyledButton
        icon={faClose}
        onClick={handleClose}
        aria-label="Close GDPR notification"
      />
    </CookiesContainer>
  );
}
