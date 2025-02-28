import React from "react";

import { Section, SectionBackground } from "@/app/genericComponents/General";
import { SectionTitle, SmallTitle } from "@/app/genericComponents/Typography";
import styled from "styled-components";
import { silkscreen } from "@/app/genericComponents/fonts";

const GameContainer = styled.div`
  display: flex;
  justify-content: center; /* Center Tetris container horizontally */
  align-items: center; /* Align containers vertically */
  position: relative;
  width: 100%;
  height: 750px; /* Full height of the viewport */
  gap: 20px;
`;

const TetrisContainer = styled.div`
  position: relative;
  width: 250px;
  height: 750px;
  background-color: #000;
  outline: 5px solid #fff;
  border-radius: 10px;
`;

const StatisticsContainer = styled.div`
  display: none;
  width: 230px;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: relative;
  outline: 5px solid #fff;
  border-radius: 10px;
  @media (min-width: 800px) {
    display: block;
    align-self: flex-end;
  }
`;

const StatisticsItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(30px, 1fr) 25px;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 5px;
`;

const PieceImage = styled.img<{ w: number; mr?: number }>`
  width: ${(props) => props.w}px;
  height: auto;
  justify-self: end;
  margin-right: ${(props) => props.mr || 0}px;
`;

const NextContainer = styled.div`
  display: none;
  width: 200px;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: relative;
  outline: 5px solid #fff;
  border-radius: 10px;
  @media (min-width: 800px) {
    display: block;
    align-self: flex-start; /* Align with the top of the Tetris container */
  }
`;

const TetrisPiece = styled.img<{
  x: number;
  y: number;
  w: number;
  noHoverEffect?: boolean;
}>`
  position: absolute;
  height: auto;
  width: ${(props) => props.w}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  z-index: 0;
  ${(props) =>
    !props.noHoverEffect &&
    `
    &:hover {
      transform: scale(1.1);
      z-index: 1;
    }
  `}
`;

export default function ThroughTheYears() {
  return (
    <div id="ThroughTheYears">
      <SectionBackground specialBackground={"#171B48"}>
        <Section>
          <SectionTitle className={silkscreen.className}>
            Through The Years
          </SectionTitle>
          <GameContainer>
            <StatisticsContainer>
              <SmallTitle className={silkscreen.className}>
                Statistics
              </SmallTitle>
              <div style={{ height: "20px" }} />
              <StatisticsItem>
                <span>Hackers</span>
                <PieceImage
                  mr={10}
                  src="/ThroughTheYears/tetris-basic1.svg"
                  w={20}
                />
                <span style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  5344
                </span>
              </StatisticsItem>
              <StatisticsItem>
                <span>Volunteers</span>
                <PieceImage
                  mr={10}
                  src="/ThroughTheYears/tetris-basic5.svg"
                  w={30}
                />
                <span style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  0416
                </span>
              </StatisticsItem>
              <StatisticsItem>
                <span>Sponsors</span>
                <PieceImage
                  mr={10}
                  src="/ThroughTheYears/tetris-basic2.svg"
                  w={30}
                />
                <span style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  0111
                </span>
              </StatisticsItem>
              <StatisticsItem>
                <span>Projects</span>
                <PieceImage
                  mr={10}
                  src="/ThroughTheYears/tetris-basic3.svg"
                  w={20}
                />
                <span style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  1102
                </span>
              </StatisticsItem>
              <StatisticsItem>
                <span>Pizzas</span>
                <PieceImage
                  mr={10}
                  src="/ThroughTheYears/tetris-basic4.svg"
                  w={20}
                />
                <span style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  2505
                </span>
              </StatisticsItem>
            </StatisticsContainer>
            <TetrisContainer>
              <a
                href="https://2024.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2024.svg"
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
                  src="/ThroughTheYears/tetris-2023.svg"
                  x={0}
                  y={198}
                  w={100}
                />
              </a>
              <a
                href="https://2022.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2022.svg"
                  x={0}
                  y={299}
                  w={150}
                />
              </a>
              <a
                href="https://2021.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2021.svg"
                  x={101}
                  y={300}
                  w={100}
                />
              </a>
              <TetrisPiece
                src="/ThroughTheYears/tetris-2020.svg"
                x={0}
                y={350}
                w={99}
                noHoverEffect
              />
              <a
                href="https://2019.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2019.svg"
                  x={0}
                  y={450}
                  w={150}
                />
              </a>
              <a
                href="https://2018.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2018.svg"
                  x={150}
                  y={450}
                  w={100}
                />
              </a>
              <a
                href="https://2017w.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2017w.svg"
                  x={1}
                  y={554}
                  w={100}
                />
              </a>
              <a
                href="https://2017f.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2017f.svg"
                  x={100}
                  y={551}
                  w={150}
                />
              </a>
              <a
                href="https://2026w.hackupc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TetrisPiece
                  src="/ThroughTheYears/tetris-2016w.svg"
                  x={149}
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
                  src="/ThroughTheYears/tetris-2016s.svg"
                  x={0}
                  y={649}
                  w={147}
                />
              </a>
            </TetrisContainer>
            <NextContainer>
              <SmallTitle className={silkscreen.className}>Next</SmallTitle>
              <div style={{ height: "20px" }} />
              <PieceImage w={100} src="/ThroughTheYears/tetris-2025.svg" />
              <div style={{ height: "20px" }} />
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                }}
              >
                <PieceImage
                  w={120}
                  src="/ThroughTheYears/tetris-next.svg"
                  style={{ position: "absolute", top: 30, left: 20 }}
                />
                <PieceImage
                  w={60}
                  src="/ThroughTheYears/question.png"
                  style={{ position: "absolute", top: 0, left: 50 }}
                />
              </div>
            </NextContainer>
          </GameContainer>
        </Section>
      </SectionBackground>
    </div>
  );
}
