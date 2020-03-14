import { SET_USERS } from "./home.constants";

export const setUsersAction = users => ({
  type: SET_USERS,
  users
});