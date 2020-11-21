import { useContext } from 'react';
import { DispatchContext } from '../stateContext';

export const useSiteDispatch = () => useContext(DispatchContext);
