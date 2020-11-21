const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  SET_GIFS: "setGifs",
};

export const contextInitialState = {
  gifs: [],
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_GIFS: {
      return regularSetter(state, "gifs", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
