export const dispatchMapper = (TYPES, dispatch) => Object.values(TYPES).reduce(
  (acum, type) => ({
    ...acum,
    [type]: (payload) => dispatch({ type, payload }),
  }),
  {},
);
