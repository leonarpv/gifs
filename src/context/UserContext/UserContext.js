import React from "react";
import { Provider } from "./stateContext";
import { useSiteState } from "../GifContext/hooks";

function UserContext({ children }) {
  return <Provider>{children}</Provider>;
}

export default UserContext;
