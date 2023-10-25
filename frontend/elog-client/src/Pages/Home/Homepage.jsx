import React from "react";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 id="hometitle">Welcome to E-log</h1>
      <Footer />
    </div>
  );
}
