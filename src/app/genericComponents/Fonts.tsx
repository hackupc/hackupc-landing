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
  Primary300,
  Primary400,
  Primary500,
  SpacingM,
  SpacingS,
  TitleL,
  TitleM,
  TitleS,
} from "@/app/genericComponents/tokens";

export const SectionTitle = styled.div`
  font-size: ${TitleL};
  text-align: center;
  font-weight: bold;
  margin-bottom: ${SpacingM};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleL};
  }
`;

interface BlockTitleProps {
  color?: string;
  haveMargin?: boolean;
}

export const BlockTitle = styled.div<BlockTitleProps>`
  font-weight: bold;
  font-size: ${TitleM};
  margin-bottom: ${(props) => (props.haveMargin ? SpacingS : "0")};
  color: ${(props) => props.color || "white"};

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileTitleM};
  }
`;
export const SmallTitle = styled.div`
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

export const BodyLink = styled.a`
  font-size: ${BodyText};
  font-weight: 700;
  color: ${Primary300};

  &:hover {
    color: ${Primary400};
  }

  &:active {
    color: ${Primary500};
  }

  @media (max-width: ${MobileBreakpoint}) {
    font-size: ${MobileBodyText};
  }
`;

export const BodyBold = styled.div`
  font-size: ${BodyText};
  font-weight: 700;
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
