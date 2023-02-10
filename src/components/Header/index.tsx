import { HeaderContainer } from "./styles";
import logoApp from "../../assets/logoApp.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "../Button";

interface HeaderProps {
  variant: string;
}

export function Header({}: HeaderProps) {
  return (
    <>
      {/* <HeaderContainer>
        <img src={logoApp} alt="" />
        <div>
          <button type="submit">
          <MapPin size={16} color="#8047f8" weight="fill" />
          Porto Alegre, RS
        </button>
        <button>
          <ShoppingCart size={16} color="#8047f8" weight="fill" />
        </button>
        </div>
      </HeaderContainer> */}
      <Button variant="purple"></Button>
    </>
  );
}
