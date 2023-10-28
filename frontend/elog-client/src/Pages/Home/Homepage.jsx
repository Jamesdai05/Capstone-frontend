import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Posts from "../../components/Posts/Posts";
import Post from "../../components/Post/Post";
import { baseURL } from "../../utils/baseUrl";

export default function Home() {
  const [reports, setReports] = useState([]);

  const makeApiCall = () => {
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReports(data);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const posts = reports.map((element, index) => (
    <Post
      title={element.title}
      key={index}
      description={element.description}
      image={element.image}
      cat={element.categories}
      time={element.createAt}
      id={element._id}
    />
  ));
  // console.log(posts);
  // axios
  //   .get(`${baseURL}/api/posts`, {
  //     responseType: "json",
  //   })
  //   .then(function (response) {
  //     console.log(response.data);
  //   });

  return (
    <div>
      <Header />
      <div className="main">
        {posts}
        {/* <Posts /> */}
      </div>
      <Footer />
    </div>
  );
}
