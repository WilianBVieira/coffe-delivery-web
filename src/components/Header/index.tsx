import { HeaderContainer } from "./styles";
import logoApp from "../../assets/logoApp.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logoApp} alt="" />
        <div>
          <button>
            <MapPin size={16} color="#8047f8" weight="fill" />
            Porto Alegre, RS
          </button>
          <NavLink to="/checkout" title="Carrinho de compras">
            <button>
              <ShoppingCart size={16} color="#c47f17" weight="fill" />
            </button>
          </NavLink>
        </div>
      </HeaderContainer>
    </>
  );
}
