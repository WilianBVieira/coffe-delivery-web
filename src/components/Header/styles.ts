import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  width: 100%;

  img {
    padding-left: 11.11%;
  }

  div {
    display: flex;
    padding-right: 11.11%;
    gap: 0.75rem;
  }

  button {
    line-height: 1.3rem;
    gap: 0.4rem;

    color: ${(props) => props.theme["purple-700"]};
    background: ${(props) => props.theme["purple-100"]};
    cursor: pointer;
  }

  a button {
    background: ${(props) => props.theme["yellow-100"]};
  }
`;
