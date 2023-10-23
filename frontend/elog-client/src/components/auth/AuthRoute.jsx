import React from "react";

export default function AuthRoute({ children }) {
  let isLogin = false;
  if (!isLogin) return <h1>Access Denied</h1>;
  return <div>{children}</div>;
}
