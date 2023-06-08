import LoginForm from "./components/login-form";

function Login() {
    return <div className="min-h-screen bg-slate-100 flex flex-col pt-60 items-center  px-5">
        <h2 className="text-4xl font-semibold tracking-wide mb-4 text-center">Forum Application</h2>
        <p className="text-sm text-slate-600 font-semibold tracking-wider mb-20">Post your Story</p>
        <LoginForm/>
    </div>
}

export default Login;