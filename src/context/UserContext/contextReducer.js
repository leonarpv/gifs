const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  ADD_FAVORITE: "addFavorite",
};

export const contextInitialState = {
  darkMode: false,
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_FAVORITE: {
      return regularSetter(state, "addFavorite", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
