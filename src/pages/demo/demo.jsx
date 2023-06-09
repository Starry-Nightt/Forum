import { Link } from "react-router-dom";

function Demo() {
    return <div className="min-h-screen flex flex-col justify-center items-center">
      <p className="text-3xl font-semibold">Demo</p>
      <ul className="mt-20"> 
        <Link to={'/home'} className="p-4 text-lg font-semibold text-blue-500">Home</Link>
        <Link to={'/demo'} className="p-4 text-lg font-semibold text-blue-500">Demo</Link>
        <Link to={'/404'} className="p-4 text-lg font-semibold text-blue-500">Not found</Link>
      </ul>
    </div>;
  }
  
  export default Demo;
  