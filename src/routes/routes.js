import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import AuthGuard from "../guards/auth-guard";
import Demo from "../pages/demo/demo";
import NotFoundPage from "../pages/not-found/not-found";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route element={<AuthGuard />}>
        <Route path="/home" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
