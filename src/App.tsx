import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>ola</h1>
      <button type="button">enviar</button>

      <GlobalStyle />
    </ThemeProvider>
  );
}
