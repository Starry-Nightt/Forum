import { END_SESSION, LOGIN } from "./user-profile.type";

const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

const endSession = () => {
  return {
    type: END_SESSION,
  };
};

export { login, endSession };
