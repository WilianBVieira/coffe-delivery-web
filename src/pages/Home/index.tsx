import {
  ButtonContainer,
  ButtonVariant,
  HomeContainer,
  IntroductionContainer,
  ListContainer,
} from "./style";
import IntroductionImageCoffe from "../../assets/IntroductionImageCoffe.svg";
import { CoffeList } from "../../components/CoffeList";
import ExpressoTradicional from "../../assets/ExpressoTradicionalImg.svg";
import ExpressoAmericano from "../../assets/ExpressoAmericanoImg.svg";
import ExpressoCremoso from "../../assets/ExpressoCremosoImg.svg";
import ExpressoGelado from "../../assets/ExpressoGeladoImg.svg";
import CafeComLeite from "../../assets/CafeComLeiteImg.svg";
import Latte from "../../assets/LatteImg.svg";
import Capuccino from "../../assets/CapuccinoImg.svg";
import Macchiato from "../../assets/MacchiatoImg.svg";
import Mocaccino from "../../assets/MocaccinoImg.svg";
import ChocolateQuente from "../../assets/ChocolateQuenteImg.svg";
import Cubano from "../../assets/CubanoImg.svg";
import Havaiano from "../../assets/HavaianoImg.svg";
import Arabe from "../../assets/ArabeImg.svg";
import Irlandes from "../../assets/IrlandesImg.svg";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Home({}: ButtonProps) {
  return (
    <HomeContainer>
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
      <ListContainer>
        <h2 className="ourCafes">Nossos cafés</h2>
        <div className="coffeListGrid">
          <CoffeList
            image={ExpressoTradicional}
            tags="TRADICIONAL"
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeList
            image={ExpressoAmericano}
            tags="TRADICIONAL"
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
          />
          <CoffeList
            image={ExpressoCremoso}
            tags="TRADICIONAL"
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
          />
          <CoffeList
            image={ExpressoGelado}
            tags="TRADICIONAL"
            name="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
          />
          <CoffeList
            image={CafeComLeite}
            tags="TRADICIONAL"
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
          />
          <CoffeList
            image={Latte}
            tags="TRADICIONAL"
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          />
          <CoffeList
            image={Capuccino}
            tags="TRADICIONAL"
            name="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
          />
          <CoffeList
            image={Macchiato}
            tags="TRADICIONAL"
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
          />
          <CoffeList
            image={Mocaccino}
            tags="TRADICIONAL"
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
          />
          <CoffeList
            image={ChocolateQuente}
            tags="TRADICIONAL"
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
          />
          <CoffeList
            image={Cubano}
            tags="TRADICIONAL"
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
          />
          <CoffeList
            image={Havaiano}
            tags="TRADICIONAL"
            name="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
          />
          <CoffeList
            image={Arabe}
            tags="TRADICIONAL"
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
          />
          <CoffeList
            image={Irlandes}
            tags="TRADICIONAL"
            name="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          />
        </div>
      </ListContainer>
    </HomeContainer>
  );
}
