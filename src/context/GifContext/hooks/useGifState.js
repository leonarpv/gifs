import { useContext } from "react";
import { StateContext } from "../stateContext";

export const useGifState = () => useContext(StateContext);
