import { useEffect } from "react";
import LoginForm from "./components/login-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/user-profile/user-profile.thunk";
import { useLocation, useNavigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.userProfile)?.isLoggedIn;
  console.log('Login render')
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return;
    const detail = {
      email: JSON.parse(email),
    };
    dispatch(loginThunk(detail));
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col pt-60 items-center  px-5">
      <h2 className="text-4xl font-semibold tracking-wide mb-4 text-center">
        Forum Application
      </h2>
      <p className="text-sm text-slate-600 font-semibold tracking-wider mb-20">
        Post your Story
      </p>
      <LoginForm />
    </div>
  );
}

export default Login;
