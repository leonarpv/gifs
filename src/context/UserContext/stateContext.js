import { TYPES, contextStateReducer, contextInitialState } from './contextReducer';
import { createContextReducer } from './createContextReducer';

export const { DispatchContext, StateContext, Provider } = createContextReducer(
  TYPES,
  contextStateReducer,
  contextInitialState,
);
