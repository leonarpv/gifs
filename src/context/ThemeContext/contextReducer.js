const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  SET_DARK_MODE: "setDarkMode",
};

export const contextInitialState = {
  darkMode: false,
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_DARK_MODE: {
      return regularSetter(state, "darkMode", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
