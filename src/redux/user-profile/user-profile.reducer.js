import { END_SESSION, LOGIN } from "./user-profile.type";

const initialState = {
  profile: null,
  isLoggedIn: false,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        profile: action.payload,
        isLoggedIn: true,
      };
    case END_SESSION:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
