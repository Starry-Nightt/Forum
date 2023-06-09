import { useDispatch } from "react-redux";
import { logoutThunk } from "../redux/user-profile/user-profile.thunk";

function Header() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutThunk())
  }

  return <section className="bg-slate-500  fixed top-0 left-0 right-0">
    <div className="container flex justify-between">
    <h1 className="text-white text-2xl font-semibold tracking-wider">Forum</h1>
    <button className="bg-white text-sm font-semibold px-3 py-1 rounded" onClick={logout}>Logout</button>
    </div>
  </section>;
}

export default Header;
