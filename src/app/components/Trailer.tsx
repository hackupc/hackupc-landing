import styled from "styled-components";
import { Section } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import { MobileBreakpoint, SpacingS } from "@/app/genericComponents/tokens";
import { lora } from "@/app/genericComponents/fonts";
import React, { useState } from "react";
import Image from "next/image";

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${SpacingS};
  border: none;
  overflow: hidden;
  pointer-events: auto;
`;

const ConsolesDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  width: 100%;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledEnvelope = styled(Image)`
  cursor: pointer;
  width: 100% !important;
  height: auto !important;
  transition: filter 0.2s;
  &:active {
    filter: brightness(0.95);
  }
`;

const TrailerContainer = styled(Section)`
  position: relative;
  padding: ${SpacingS} 0 ${SpacingS} 0;
  gap: ${SpacingS};
  max-width: 100%;
  z-index: 0;
`;

const Agrupar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

const EnvelopeContainer = styled.div<{ isOpen?: boolean }>`
  position: relative;
  width: min(500px, calc(50vw - 80px));
  height: auto;
  aspect-ratio: 500 / ${(props) => (props.isOpen ? 550 : 350)};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: aspect-ratio 0.3s ease;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    max-width: 500px;
    min-width: 200px;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 3%;
  left: 9%;
  width: 82%;
  height: 43%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  overflow: hidden;
  clip-path: polygon(
    0 1.8rem,
    1.8rem 0,
    calc(100% - 1.8rem) 0,
    100% 1.8rem,
    100% 100%,
    0 100%
  );

  @media (max-width: ${MobileBreakpoint}) {
    clip-path: polygon(
      0 2.3rem,
      2.3rem 0,
      calc(100% - 2.3rem) 0,
      100% 2.3rem,
      100% 100%,
      0 100%
    );
  }
`;

export const StyledSectionTitle = styled(SectionTitle)`
  position: relative;
  width: fit-content;
  margin: 0 auto 45px auto;
  padding: 8px 32px 8px 32px;
  font-size: 32px;
  background-color: rgba(255, 227, 216, 1);
  box-shadow: 0px 2px 1px 1px #0000009d;
`;

export default function Trailer() {
  const [teaserOpen, setTeaserOpen] = useState(false);
  const [aftermovieOpen, setAftermovieOpen] = useState(false);

  return (
    <TrailerContainer>
      <Section style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ConsolesDiv>
          {/* TEASER */}
          <Agrupar>
            <StyledSectionTitle
              className={lora.className}
              style={{ color: "#191937" }}
            >
              Teaser
            </StyledSectionTitle>
            <EnvelopeContainer isOpen={teaserOpen}>
              <StyledEnvelope
                src={
                  teaserOpen
                    ? "/teaser/OpenBlueEnv.svg"
                    : "/teaser/blueEnvelope.svg"
                }
                alt="Open teaser"
                width={500}
                height={teaserOpen ? 550 : 350}
                onClick={() => setTeaserOpen((open) => !open)}
                style={{
                  zIndex: 1,
                  cursor: "pointer",
                }}
                priority
              />
              {teaserOpen && (
                <VideoOverlay>
                  <StyledIframe
                    title="HackUPC 2025 | Trailer"
                    src="https://www.youtube.com/embed/uSQFmtX0wQs?si=XFjHjtCiMloTOm_T&autoplay=1"
                    allowFullScreen
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  />
                </VideoOverlay>
              )}
            </EnvelopeContainer>
          </Agrupar>

          {/* AFTERMOVIE */}
          <Agrupar>
            <StyledSectionTitle
              className={lora.className}
              style={{ color: "#2C5332" }}
            >
              Aftermovie
            </StyledSectionTitle>
            <EnvelopeContainer isOpen={aftermovieOpen}>
              <StyledEnvelope
                src={
                  aftermovieOpen
                    ? "/teaser/OpenGreenEnv.svg"
                    : "/teaser/greenEnvelope.svg"
                }
                alt="Open aftermovie"
                width={500}
                height={aftermovieOpen ? 550 : 350}
                onClick={() => setAftermovieOpen((open) => !open)}
                style={{
                  zIndex: 1,
                  cursor: "pointer",
                }}
                priority
              />
              {aftermovieOpen && (
                <VideoOverlay>
                  <StyledIframe
                    title="HackUPC 2025 | Aftermovie"
                    src="https://www.youtube.com/embed/9BGYprMJLQw?autoplay=1"
                    allowFullScreen
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  />
                </VideoOverlay>
              )}
            </EnvelopeContainer>
          </Agrupar>
        </ConsolesDiv>
      </Section>
    </TrailerContainer>
  );
}
