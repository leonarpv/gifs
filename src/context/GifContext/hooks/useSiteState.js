import { useContext } from 'react';
import { StateContext } from '../stateContext';

export const useSiteState = () => useContext(StateContext);
