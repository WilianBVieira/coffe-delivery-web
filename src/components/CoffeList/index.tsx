import { CoffeCard, CoffeListContainer } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";

interface CoffeListProps {
  image: string;
  tags: string;
  name: string;
  description: string;
}

export function CoffeList({ image, tags, name, description }: CoffeListProps) {
  return (
    <CoffeListContainer>
      <div className="CardListContainer">
        <CoffeCard>
          <img src={image} />
          <div className="coffeTag">
            <label>{tags}</label>
          </div>
          <h2 className="productName">{name}</h2>
          <h3 className="nameSubtitle">{description}</h3>
          <div className="buyArea">
            <div className="price">
              <h3 className="dollarSign">R$</h3>
              <h2 className="productValue">9,90</h2>
            </div>
            <div className="quantityAndCart">
              <div className="inputStepper">
                <button id="decrement"> - </button>
                <input
                  type="number"
                  id="quantityOfProducts"
                  placeholder="1"
                  min={1}
                  max={100}
                  readOnly
                />
                <button id="increment"> + </button>
              </div>
              <button className="addToCart">
                <ShoppingCartSimple size={16} color="white" weight="fill" />
              </button>
            </div>
          </div>
        </CoffeCard>
      </div>
    </CoffeListContainer>
  );
}
