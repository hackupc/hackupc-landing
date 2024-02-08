import styled from "styled-components";
import {
  BackgroundWithOpacity,
  SpacingL,
  SpacingXS,
  SpacingM,
} from "@/app/genericComponents/tokens";

interface SectionProps {
  haveBackground?: boolean;
}

export const Section = styled.div<SectionProps>`
  padding: ${SpacingL};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.haveBackground ? BackgroundWithOpacity : "transparent"};
`;
