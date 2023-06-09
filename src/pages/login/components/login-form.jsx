import {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../redux/user-profile/user-profile.thunk';


function LoginForm() {
  const dispatch = useDispatch();
  const emailRef = useRef();

  const login = (e) => {
    dispatch(loginThunk({email: emailRef.current.value}))
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
          ref={emailRef}
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
