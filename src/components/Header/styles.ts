import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  width: 100%;

  img {
    padding-left: 10rem;
  }

  div {
    display: flex;
    padding-right: 10rem;
    gap: 0.75rem;
  }

  /* button {
    
    color: ${(props) => props.theme["purple-700"]};
    background: ${(props) => props.theme["purple-100"]};
    cursor: pointer;
  } */
`;
