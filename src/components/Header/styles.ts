import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.25rem;

  .counter {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.25rem;
      height: 1.25rem;
      margin-left: -0.7rem;
      margin-top: -1rem;
      font-weight: 700;
      color: ${(props) => props.theme.white};

      border-radius: 50%;
      background: ${(props) => props.theme["yellow-700"]};
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  .cabeçalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.5rem;
    width: 70rem;
  }
  .actions {
    display: flex;
    gap: 0.75rem;
    height: 2.375rem;

    button {
      line-height: 1.3rem;
      gap: 0.2rem;
      height: 100%;
      font-size: 14px;

      color: ${(props) => props.theme["purple-700"]};
      background: ${(props) => props.theme["purple-100"]};
      cursor: pointer;
    }

    a button {
      background: ${(props) => props.theme["yellow-100"]};
      width: 2.375rem;
    }
  }
`;
