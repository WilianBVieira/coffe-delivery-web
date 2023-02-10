import styled, { css } from "styled-components";

export type ButtonVariant =
  | "baseButton"
  | "purpleLight"
  | "purple"
  | "purpleDark"
  | "yellowLight"
  | "yellowDark";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  baseButton: "#e6e5e5",
  purpleLight: "#ebe5f9",
  purple: "#8047f",
  purpleDark: "#4b2995",
  yellowLight: "#f1e9c9",
  yellowDark: "#c47f17",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  line-height: 1.3rem;
  gap: 0.4rem; */
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}
`;
