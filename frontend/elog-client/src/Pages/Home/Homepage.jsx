import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Posts from "../../components/Posts/Posts";
import Post from "../../components/Post/Post";
import { baseURL } from "../../utils/baseUrl";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  const [reports, setReports] = useState([]);

  const store = useSelector((state) => state?.users);
  const { usersAuth } = store;
  // const navigate = useNavigate();

  const makeApiCall = () => {
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReports(data);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const posts = reports.map((element, index) => (
    <div className="grid-card">
      <Post
        title={element.title}
        key={index}
        description={element.description}
        // image={element.image}
        cat={element.categories}
        time={element.createAt}
        id={element._id}
      />
    </div>
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
      {!usersAuth ? (
        <div className="empty">
          <h1>Please sign up an account...</h1>
        </div>
      ) : (
        <div className="main">
          {posts}
          {/* <Posts /> */}
        </div>
      )}
      <Footer />
    </div>
  );
}
