import styled from "styled-components";
import {
  BodyText,
  BodyTextMedium,
  BodyTextSmall,
  MobileBodyText,
  MobileBodyTextMedium,
  MobileBodyTextSmall,
  MobileBreakpoint,
  MobileTitleL,
  MobileTitleM,
  MobileTitleS,
  SpacingL,
  SpacingM,
  SpacingS,
  TitleL,
  TitleM,
  TitleS,
} from "@/app/genericComponents/tokens";

export const SectionTitle = styled.p`
  font-size: ${TitleL};
  text-align: center;
  font-weight: bold;
  margin-bottom: ${SpacingL};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
    margin-bottom: ${SpacingM};
  }
`;

interface BlockTitleProps {
  color?: string;
}

export const BlockTitle = styled.div<BlockTitleProps>`
  font-weight: bold;
  font-size: ${TitleM};
  margin-bottom: ${SpacingS};
  color: ${(props) => props.color || "white"};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
  }
`;
export const SmallTitle = styled.p`
  font-size: ${TitleS};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleS};
  }
`;

export const Body = styled.div`
  font-size: ${BodyText};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyText};
  }
`;

export const BodyMedium = styled.div`
  font-size: ${BodyTextMedium};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextMedium};
  }
`;

export const BodySmall = styled.div`
  font-size: ${BodyTextSmall};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyTextSmall};
  }
`;
