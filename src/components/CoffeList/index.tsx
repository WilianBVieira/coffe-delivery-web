import { CoffeCard, CoffeListContainer } from "./styles";
import CoffeImage from "../../assets/CoffeImageCard.svg";
import { ShoppingCartSimple } from "phosphor-react";

export function CoffeList() {
  return (
    <CoffeListContainer>
      <div className="CardListContainer">
        <h2 className="ourCafes">Nossos cafés</h2>
        <CoffeCard>
          <img src={CoffeImage} />
          <div className="coffeTag">
            <label>TRADICIONAL</label>
          </div>
          <h2 className="productName">Expresso Tradicional</h2>
          <h3 className="nameSubtitle">
            O tradicional café feito com água quente e grãos moídos
          </h3>
          <div className="buyArea">
            <h3 className="dollarSign">R$</h3>
            <h2 className="productValue">9,90</h2>
            <input type="number" placeholder="1"></input>
            <button>
              <ShoppingCartSimple size={16} color="#da1616" weight="fill" />
            </button>
          </div>
        </CoffeCard>
      </div>
    </CoffeListContainer>
  );
}
