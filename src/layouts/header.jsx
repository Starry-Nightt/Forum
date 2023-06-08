import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
  }

  return <section className="p-4 bg-slate-500 flex justify-between fixed top-0 left-0 right-0">
    <h1 className="text-white text-2xl font-semibold tracking-wider">Forum</h1>
    <button className="bg-white text-sm font-semibold px-3 py-1 rounded" onClick={logout}>Logout</button>
  </section>;
}

export default Header;
