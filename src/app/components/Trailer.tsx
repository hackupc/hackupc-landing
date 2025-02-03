import styled from "styled-components";
import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import { MobileBreakpoint, SpacingS } from "@/app/genericComponents/tokens";
import { silkscreen } from "@/app/genericComponents/fonts";
import React from "react";
import Image from "next/image";

const VideoWrapper = styled.div`
  position: relative;
  width: 90%;
  padding-top: 45%;
  aspect-ratio: 16 / 9;

  @media (max-width: ${MobileBreakpoint}) {
    width: 100%;
    padding-top: 56.25%;
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${SpacingS};
  border: none;
  overflow: hidden;
`;

const ConsolePlayer = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  max-width: 600px;
  background-color: #594f4f;
`;

const ConsolesDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
  }
`;

const InnerConsole = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  padding: 20px;
  // center the content
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledButtons = styled(Image)`
  @media (max-width: ${MobileBreakpoint}) {
    width: 90%;
  }
  width: 80%;
`;

const CustomTitle = styled(SectionTitle)`
  margin-bottom: 0;
  color: #000;
`;

export default function Trailer() {
  return (
    <SectionBackground specialBackground="#231F20">
      <Section className={silkscreen.className}>
        <ConsolesDiv>
          <ConsolePlayer>
            <InnerConsole backgroundColor={"#f4ead5"}>
              <CustomTitle className={silkscreen.className}>Teaser</CustomTitle>
              {/*<VideoNotAvailable> Teaser coming soon... </VideoNotAvailable>*/}
              <VideoWrapper>
                <StyledIframe
                  title="HackUPC 2025 | Trailer"
                  src="https://www.youtube.com/embed/uSQFmtX0wQs?si=XFjHjtCiMloTOm_T"
                  allowFullScreen
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
              </VideoWrapper>

              <StyledButtons
                src="/console_buttons.svg"
                alt="console buttons"
                width={420}
                height={120}
              />
            </InnerConsole>
          </ConsolePlayer>

          <ConsolePlayer>
            <InnerConsole backgroundColor={"#BC8FD2"}>
              <CustomTitle className={silkscreen.className}>
                Aftermovie 2024
              </CustomTitle>
              <VideoWrapper>
                <StyledIframe
                  title="HackUPC 2024 | Aftermovie"
                  src="https://www.youtube.com/embed/cgfJIZ2udhw?si=r3cj3SZpagO4kzzz"
                  allowFullScreen
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
              </VideoWrapper>

              <StyledButtons
                src="/console_buttons.svg"
                alt="console buttons"
                width={420}
                height={120}
              />
            </InnerConsole>
          </ConsolePlayer>
        </ConsolesDiv>
      </Section>
    </SectionBackground>
  );
}
