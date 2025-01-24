import React from "react";

import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle } from "@/app/genericComponents/Typography";
import styled from "styled-components";
import { silkscreen } from "@/app/genericComponents/fonts";

const TetrisContainer = styled.div`
  position: relative;
  width: 250px;
  height: 750px;
  background-color: #000;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

const TetrisPiece = styled.img<{ x: number; y: number; w: number }>`
  position: absolute;
  height: auto;
  width: ${(props) => props.w}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
`;

export default function ThroughTheYears() {
  return (
    <div id="ThroughTheYears">
      <SectionBackground specialBackground={"#171B48"}>
        <Section>
          <SectionTitle className={silkscreen.className}>
            Through The Years
          </SectionTitle>
          <TetrisContainer>
            <a
              href="https://2024.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2024.png"
                x={200}
                y={50}
                w={50}
              />
            </a>
            <a
              href="https://2023.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2023.png"
                x={0}
                y={200}
                w={100}
              />
            </a>
            <a
              href="https://2022.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2022.png"
                x={0}
                y={300}
                w={150}
              />
            </a>
            <a
              href="https://2021.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2021.png"
                x={101}
                y={305}
                w={100}
              />
            </a>
            <a
              href="https://2018.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2018.png"
                x={150}
                y={450}
                w={100}
              />
            </a>
            <a
              href="https://2017f.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2017f.png"
                x={100}
                y={550}
                w={150}
              />
            </a>
            <a
              href="https://2026w.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2016w.png"
                x={151}
                y={603}
                w={100}
              />
            </a>
            <a
              href="https://2016s.hackupc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TetrisPiece
                src="/ThroughTheYears/tetris_2016s.png"
                x={0}
                y={650}
                w={150}
              />
            </a>
          </TetrisContainer>
        </Section>
      </SectionBackground>
    </div>
  );
}
