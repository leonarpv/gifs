import React from "react";
import { Provider } from "./stateContext";

function GifContext({ children }) {
  return <Provider>{children}</Provider>;
}

export default GifContext;
