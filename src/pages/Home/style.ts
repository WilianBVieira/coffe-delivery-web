import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 34rem;

  article {
    display: grid;
    width: 70rem;
    height: inherit;
    grid-template-columns: 804fr 636fr;
    grid-template-rows: 1fr 1fr;

    div {
      grid-column: 1/2;
      grid-row: 1/2;

      width: 40.25rem;
      height: 21.5rem;
      flex-direction: column;
      display: flex;

      h2 {
        width: 33.625rem;
        height: 13.625rem;
        color: ${(props) => props.theme["base-title"]};

        display: flex;
        align-items: flex-end;

        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        font-size: 44px;
        line-height: 1.3;
      }

      h3 {
        width: 33.625rem;
        height: 7.75rem;
        padding-top: 1rem;
        color: ${(props) => props.theme["base-subtitle"]};

        line-height: 1.3;
        font-size: 20px;
        font-weight: 400;
      }
    }

    img {
      grid-column: 2/3;
      grid-row: 1/3;

      padding-top: 5.875rem;
      padding-left: 1.75rem;
    }

    .productInfo {
      width: 35.44rem;
      height: 5.25rem;

      grid-column: 1/2;
      grid-row: 2/3;

      display: grid;
      grid-template-columns: 0.9fr 1fr;
      grid-template-rows: 1fr 1fr;

      h4 {
        display: flex;
        flex-direction: row;
        align-items: center;

        text {
          padding-left: 0.75rem;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
`;

export type ButtonVariant = "YellowDark" | "Yellow" | "BaseText" | "Purple";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  YellowDark: "#c47f17",
  Yellow: "#dbac2c",
  BaseText: "#574f4d",
  Purple: "#8047f8",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}
`;

export const ListContainer = styled.div`
  width: 70rem;
  padding-bottom: 9.8rem;

  .ourCafes {
    font-weight: 800;
    line-height: 1.3;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    padding-bottom: 3.7rem;
  }

  .coffeListGrid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
