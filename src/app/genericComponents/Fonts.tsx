import styled from "styled-components";
import {
  BodyText,
  SpacingL,
  SpacingS,
  TitleL,
  TitleM,
  TitleS,
} from "@/app/genericComponents/tokens";

export const Body = styled.div`
  font-size: ${BodyText};
`;

export const SectionTitle = styled.p`
  font-size: ${TitleL};
  text-align: center;
  font-weight: bold;
  margin-bottom: ${SpacingL};
`;

export const BlockTitle = styled.p`
  font-weight: bold;
  font-size: ${TitleM};
  margin-bottom: ${SpacingS};
`;
export const Title3 = styled.p`
  font-size: ${TitleS};
`;
