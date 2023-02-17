import styled from "styled-components";

export const CoffeListContainer = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-family: "Baloo 2", sans-serif;
  }

  .CardListContainer {
    width: 70rem;
    padding-bottom: 2rem;

    .ourCafes {
      font-weight: 800;
      line-height: 1.3;
      font-size: 2rem;
      color: ${(props) => props.theme["base-subtitle"]};
      padding-bottom: 3.375rem;
    }
  }
`;

export const CoffeCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 19.375rem;
  width: 16rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background: ${(props) => props.theme["base-card"]};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  .coffeTag {
    padding-top: 0.75rem;

    label {
      padding: 0.2rem 0.5rem;
      border-radius: 999rem;

      font-size: 10px;
      font-weight: 700;
      line-height: 1.3;

      background: ${(props) => props.theme["yellow-100"]};
      color: ${(props) => props.theme["yellow-700"]};
    }
  }

  .productName {
    display: flex;
    justify-content: center;
    padding-top: 1.1875rem;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  .nameSubtitle {
    display: flex;
    justify-content: center;
    padding-top: 0.8175rem;
    width: 13.4rem;

    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
  }

  .buyArea {
    display: flex;
    flex-direction: row;
    width: 13rem;
    height: 2.375rem;
    justify-content: space-between;

    margin-top: 2.1875rem;

    .price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 4.1875rem;

      .dollarSign {
        padding-top: 0.75rem;
        font-size: 14px;
        font-weight: 400;
      }

      .productValue {
        font-size: 24px;
        font-weight: 800;
      }
    }

    .quantityAndCart {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 7.375rem;

      input {
        width: 4.5rem;
      }

      button {
        background: ${(props) => props.theme["purple-700"]};
        width: 2.375rem;
      }
    }
  }
`;
