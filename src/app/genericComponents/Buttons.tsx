import styled from "styled-components";

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
