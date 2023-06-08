import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const login = (e) => {
    navigate("/home");
    e.preventDefault();
  };

  return (
    <form className="w-full max-w-md">
      <div className="mb-6">
        <label className="font-semibold block mb-2 text-lg">Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          className="outline-none py-3 px-4 rounded-lg border-2 w-full"
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-slate-700 text-white py-2 px-5 text-lg rounded-lg font-medium"
          onClick={login}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
