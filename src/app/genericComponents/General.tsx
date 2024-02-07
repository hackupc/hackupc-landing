import styled from "styled-components";
import {
  BackgroundWithOpacity,
  SpacingL,
} from "@/app/genericComponents/tokens";

interface SectionProps {
  haveBackground?: boolean;
}

export const Section = styled.div<SectionProps>`
  padding: ${SpacingL};
  background-color: ${(props) =>
    props.haveBackground ? BackgroundWithOpacity : "transparent"};
`;
