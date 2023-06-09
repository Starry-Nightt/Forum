import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../layouts/header";
import MainLayout from "../layouts/main-layout";

function AuthGuard() {
  const isLoggedIn = useSelector((state) => state.userProfile)?.isLoggedIn;
  const location = useLocation();
  return isLoggedIn ? (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
export default AuthGuard;
