import { useContext } from "react";
import { StateContext } from "../stateContext";

export const useUserState = () => useContext(StateContext);
