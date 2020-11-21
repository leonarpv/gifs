import React from "react";
import { Provider } from "./stateContext";
import { useSiteState } from "./hooks";

function GifContext({ children }) {
  return <Provider>{children}</Provider>;
}

export default GifContext;
