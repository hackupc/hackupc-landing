import styled from "styled-components";
import {
  BodyText,
  MobileBreakpoint,
  Primary100,
  Primary200,
  Primary300,
  Primary400,
  Primary500,
  Secondary100,
  Secondary200,
  Secondary300,
  Secondary500,
  Secondary600,
  Secondary800,
  SpacingL,
  SpacingS,
  SpacingXS,
} from "@/app/genericComponents/tokens";

interface ButtonProps {
  width?: string;
  disabled?: boolean;
}

const ButtonGeneric = styled.a<ButtonProps>`
  padding: ${SpacingS} ${SpacingL};
  border-radius: ${SpacingXS};
  text-align: center;
  text-transform: uppercase;
  font-size: ${BodyText};
  width: ${(props) => props.width || "fit-content"};
  margin-top: ${SpacingS};
  cursor: pointer;

  @media (max-width: ${MobileBreakpoint}) {
    padding: ${SpacingS};
    width: 100%;
  }
`;

export const SecondaryButton = styled(ButtonGeneric)`
  border: none;
  background-color: ${(props) =>
    props.disabled ? Secondary100 : Secondary500};
  color: ${(props) => (props.disabled ? Secondary300 : "white")};

  &:hover {
    background-color: ${Secondary600};
  }
  &:active {
    background-color: ${Secondary800};
  }
`;

export const PrimaryButton = styled(ButtonGeneric)`
  border: none;
  background-color: ${(props) => (props.disabled ? Primary100 : Primary300)};
  color: ${(props) => (props.disabled ? Primary300 : Primary100)};

  &:hover {
    background-color: ${Primary400};
    color: white;
  }
  &:active {
    background-color: ${Primary500};
    color: white;
  }
`;

export const PrimaryOutlineButton = styled(ButtonGeneric)`
  background-color: ${(props) => (props.disabled ? Primary100 : "transparent")};
  border: 2px solid ${(props) => (props.disabled ? Primary200 : Primary100)};
  color: ${(props) => (props.disabled ? Primary300 : Primary100)};

  &:hover {
    background-color: ${Primary100};
    border-color: ${Primary500};
    color: ${Primary500};
  }

  &:active {
    background-color: ${Primary200};
    border-color: ${Primary500};
    color: ${Primary500};
  }
`;

export const SecondaryOutlineButton = styled(ButtonGeneric)`
  background-color: ${(props) =>
    props.disabled ? Secondary100 : "transparent"};
  border: 2px solid ${(props) => (props.disabled ? Secondary200 : Secondary500)};
  color: ${(props) => (props.disabled ? Secondary300 : Secondary500)};

  &:hover {
    background-color: ${Secondary100};
    border-color: ${Secondary500};
    color: ${Secondary500};
  }
  &:active {
    background-color: ${Secondary200};
    border-color: ${Secondary500};
    color: ${Secondary500};
  }
`;
