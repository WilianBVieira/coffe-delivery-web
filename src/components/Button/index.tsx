import { ButtonContainer, ButtonVariant } from "./styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "baseButton" }: ButtonProps) {
  <ButtonContainer variant={variant}>enviar</ButtonContainer>;
}
