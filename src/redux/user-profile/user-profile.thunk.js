import * as UserService from "../../services/user.service";
import { login, endSession } from "./user-profile.action";

const loginThunk = (detail) => {
  return function (dispatch) {
    UserService.getUserByEmail(detail)
      .then((res) => {
        dispatch(login(res.data[0]));
        localStorage.setItem("email", JSON.stringify(res.data[0]?.email));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logoutThunk = () => {
  return function (dispatch) {
    dispatch(endSession());
    localStorage.removeItem("email");
  };
};

export { loginThunk, logoutThunk };
