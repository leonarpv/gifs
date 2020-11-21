import React from "react";
import { Provider } from "./stateContext";

function UserContext({ children }) {
  return <Provider>{children}</Provider>;
}

export default UserContext;
