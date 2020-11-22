import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../themes";
import { useThemeState } from "./hooks";
import { Provider } from "./stateContext";

function ThemeContext({ children }) {
  const state = useThemeState();

  return (
    <Provider>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </Provider>
  );
}

export default ThemeContext;
