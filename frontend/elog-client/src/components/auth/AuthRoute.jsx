import React from "react";
import NotAuthenticated from "../../Pages/NotAuthenticated/NotAuthenticated";
import Admin from "../admin/Admin";

export default function AuthRoute() {
  let isLogin = false ;
  if (!isLogin) return <NotAuthenticated />;
  return <Admin />;
}
