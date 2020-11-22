const regularSetter = (state, key, value) => ({ ...state, [key]: value });
export const TYPES = {
  RESET: "reset",
  ADD_FAVORITE: "addFavorite",
  OPEN_SIDEBAR: "openSidebar",
};

export const contextInitialState = {
  favorites: [],
  sidebarOpen: false,
};

export const contextStateReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_FAVORITE: {
      return regularSetter(state, "favorites", payload);
    }
    case TYPES.OPEN_SIDEBAR: {
      return regularSetter(state, "sidebarOpen", payload);
    }
    case TYPES.RESET: {
      return { ...contextInitialState };
    }
    default: {
      return state;
    }
  }
};
