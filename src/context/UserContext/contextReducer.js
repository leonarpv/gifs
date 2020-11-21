const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  ADD_FAVORITE: "addFavorite",
};

export const contextInitialState = {
  favorites: [],
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_FAVORITE: {
      return regularSetter(state, "favorites", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
