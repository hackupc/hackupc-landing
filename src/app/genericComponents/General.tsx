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
  background-color: ${(props) =>
    props.haveBackground ? BackgroundWithOpacity : "transparent"};
`;

export const GeneralEnumerateList = styled.ol`
  padding-left: ${SpacingM};
`;

export const GeneralUnorderedList = styled.ul`
  padding-left: ${SpacingM};
`;

export const GeneralListItem = styled.li`
  margin-bottom: ${SpacingXS};
`;
