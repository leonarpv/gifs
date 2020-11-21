import { useContext } from "react";
import { DispatchContext } from "../stateContext";

export const useUserDispatch = () => useContext(DispatchContext);
