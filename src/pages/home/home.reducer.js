import { SET_USERS } from "./home.constants";

const initialState = {
  users: []
};

const setUser = (state, action) => {
  const { users } = action;

  return {
    ...state,
    users
  };
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return setUser(state, action);

    default:
      return state;
  }
};

export default homeReducer;