import styled from "styled-components";
import {
  BackgroundWithOpacity,
  MaxScreenSize,
  MobileBreakpoint,
  SpacingL,
  SpacingM,
} from "@/app/genericComponents/tokens";

interface SectionProps {
  haveBackground?: boolean;
  specialBackground?: string;
}

export const SectionBackground = styled.div<SectionProps>`
  background-color: ${(props) =>
    props.haveBackground
      ? BackgroundWithOpacity
      : props.specialBackground
        ? props.specialBackground
        : "transparent"};
`;

export const Section = styled.div`
  padding: ${SpacingL};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  max-width: ${MaxScreenSize};
  margin: 0 auto;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingL} ${SpacingM};
  }
`;

export const WhiteContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.51);
  border-radius: 10px;
  padding: ${SpacingM};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
