import { ButtonContainer, ButtonVariant, IntroductionContainer } from "./style";
import IntroductionImageCoffe from "../../assets/IntroductionImageCoffe.svg";
import { CoffeList } from "../../components/CoffeList";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Home({}: ButtonProps) {
  return (
    <div>
      <IntroductionContainer>
        <article>
          <div>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </div>
          <img src={IntroductionImageCoffe} />
          <div className="productInfo">
            <h4>
              <ButtonContainer variant="YellowDark" />
              <text>Compra simples e segura</text>
            </h4>
            <h4>
              <ButtonContainer variant="BaseText" />
              <text>Embalagem mantém o café intacto</text>
            </h4>
            <h4>
              <ButtonContainer variant="Yellow" />
              <text>Entrega rápida e rastreada</text>
            </h4>
            <h4>
              <ButtonContainer variant="Purple" />
              <text>O café chega fresquinho até você</text>
            </h4>
          </div>
        </article>
      </IntroductionContainer>
      <CoffeList />
    </div>
  );
}
