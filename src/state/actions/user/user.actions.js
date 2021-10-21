import { UserActionTypes } from "../CONSTANTS";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
