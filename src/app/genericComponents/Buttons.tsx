import styled from "styled-components";
import {
  BodyText,
  Secondary100,
  Secondary300,
  Secondary500,
  Secondary600,
  Secondary800,
  SpacingM,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

interface ButtonProps {
  color: string;
}

export const GenericButton = styled.button<ButtonProps>`
  padding: 1rem;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === "#D9AFFF" ? "#240059" : "#fff")};
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) =>
      props.color === "#D9AFFF" ? "#ac4dff" : "#9c1916"};
    color: #fff;
  }
`;

export const PrimaryButton = styled.button`
  padding: ${SpacingS} ${SpacingM};
  background-color: ${Secondary500};
  border: none;
  border-radius: ${SpacingXS};
  text-transform: uppercase;
  font-size: ${BodyText};
  width: fit-content;
  margin-top: ${SpacingS};
  cursor: pointer;
  color: white;

  &:hover {
    background-color: ${Secondary600};
  }
  &:active {
    background-color: ${Secondary800};
  }
  &:disabled {
    background-color: ${Secondary100};
    color: ${Secondary300};
  }
`;
