import React from "react";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <Posts />
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
}
