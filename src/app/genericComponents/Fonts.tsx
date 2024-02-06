import styled from "styled-components";
import { BodyText, H1, H2, H3 } from "@/app/genericComponents/tokens";

export const Body = styled.div`
  font-size: ${BodyText};
`;

export const SectionTitle = styled.p`
  font-size: ${H1};
  text-align: center;
  font-weight: bold;
  margin-bottom: 4rem;
`;

export const Title2 = styled.p`
  font-weight: bold;
  font-size: ${H2};
  margin-bottom: 12px;
`;
export const Title3 = styled.p`
  font-size: ${H3};
`;
