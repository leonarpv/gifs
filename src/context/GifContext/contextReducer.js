const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  SET_GIFS: "setGifs",
  SET_TRENDINGS: "setTrendings",
};

export const contextInitialState = {
  gifs: [],
  trendings: [],
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_GIFS: {
      return regularSetter(state, "gifs", payload);
    }
    case TYPES.SET_TRENDINGS: {
      return regularSetter(state, "trendings", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
