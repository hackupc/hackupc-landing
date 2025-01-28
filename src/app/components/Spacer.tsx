import styled from "styled-components";
import React from "react";
import { SectionBackground } from "@/app/genericComponents/General";

const SpacerBackground = styled(SectionBackground)`
  background-image: url("/spacer.svg");
  background-size: auto 100%;
  background-repeat: repeat-x;
  background-position: center; // remove this is want to clamp on left
  height: 120px;
  width: 100%;
`;

export default function Spacer() {
  return <SpacerBackground />;
}
