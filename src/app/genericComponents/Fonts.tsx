import styled from "styled-components";
import { BodyText, H1, H2, H3 } from "@/app/genericComponents/constants";

export const Body = styled.p`
  font-size: ${BodyText};
`;

export const Title1 = styled.p`
  font-size: ${H1};
  text-align: center;
  font-weight: bold;
  margin-bottom: 4rem;
`;

export const Title2 = styled.p`
  font-size: ${H2};
`;
export const Title3 = styled.p`
  font-size: ${H3};
`;
