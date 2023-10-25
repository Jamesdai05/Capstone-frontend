import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <span className="titleSm">Welcome To</span>
        <span className="titleLg">E-log</span>
        <img
          src="https://fastly.picsum.photos/id/416/900/400.jpg?hmac=2SV5t47LKCjdINJFhG8RPmwrOQIAnroN8W23ZWnV8RY"
          alt="img"
        />
      </div>
    </div>
  );
}
