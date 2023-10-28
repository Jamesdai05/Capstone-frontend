import React, { useEffect, useState } from "react";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/Posts/Posts";
import { baseURL } from "../../utils/baseUrl";

export default function Home() {
  const [reports, Setreports] = useState([]);

  const makeApiCall = () => {
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(typeof data);
        Setreports(data);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const posts = reports.map((element) => {
    <Posts
      title={element.title}
      key={element._id}
      description={element.description}
      image={element.image}
      cat={element.category}
      time={element.createAt}
    />;
  });

  return (
    <div>
      <Header />
      <div className="main">
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
