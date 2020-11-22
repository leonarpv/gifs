import { useContext } from "react";
import { DispatchContext } from "../stateContext";

export const useThemeDispatch = () => useContext(DispatchContext);
