import { useContext } from "react";
import { DispatchContext } from "../stateContext";

export const useGifDispatch = () => useContext(DispatchContext);
