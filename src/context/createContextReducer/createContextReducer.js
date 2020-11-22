import React, { createContext, useRef, useReducer } from "react";

import { dispatchMapper } from "./dispatchMapper";

export const createContextReducer = (types, reducer, initialState) => {
  const StateContext = createContext({});
  const DispatchContext = createContext({});

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchMapped = useRef(dispatchMapper(types, dispatch));

    return (
      <DispatchContext.Provider value={dispatchMapped.current}>
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
      </DispatchContext.Provider>
    );
  };

  return { Provider, StateContext, DispatchContext };
};
