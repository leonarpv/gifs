const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  SET_GIFS: "setGifs",
  SET_TRENDINGS: "setTrendings",
  SET_GIF: "setGif",
};

export const contextInitialState = {
  gifs: [],
  trendings: [],
  gif: null,
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_GIFS: {
      return regularSetter(state, "gifs", payload);
    }
    case TYPES.SET_TRENDINGS: {
      return regularSetter(state, "trendings", payload);
    }
    case TYPES.SET_GIF: {
      return regularSetter(state, "gif", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
