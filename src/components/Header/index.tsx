import { HeaderContainer, NavBar } from "./styles";
import logoApp from "../../assets/LogoApp.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <NavBar>
      <HeaderContainer>
        <div className="cabeçalho">
          <NavLink to="/">
            <img src={logoApp} alt="" />
          </NavLink>
          <div className="actions">
            <button title="Localização">
              <MapPin size={18} color="#8047f8" weight="fill" />
              Porto Alegre, RS
            </button>
            <NavLink to="/checkout" title="Carrinho de compras">
              <button>
                <ShoppingCart size={21} color="#c47f17" weight="fill" />
              </button>
            </NavLink>
          </div>
        </div>
      </HeaderContainer>
      <div className="counter">
        <div>0</div>
      </div>
    </NavBar>
  );
}
