import React from "react";
import NotAuthenticated from "../../Pages/NotAuthenticated/NotAuthenticated";
import Admin from "../admin/Admin";

export default function AuthRoute() {
  const usersAuth = localStorage.getItem("userInfo");


  let isLogin = usersAuth.user ;
  if (!isLogin) return <Admin />;
  return <NotAuthenticated />;
}
