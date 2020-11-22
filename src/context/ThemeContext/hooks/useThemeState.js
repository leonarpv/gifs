import { useContext } from "react";
import { StateContext } from "../stateContext";

export const useThemeState = () => useContext(StateContext);
