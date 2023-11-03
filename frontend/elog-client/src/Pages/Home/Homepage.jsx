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
  const [sortType, setSortType] = useState("title");
  const [sortByField, setSortByField] = useState("title");
  const [result, setResult] = useState();
  const [display, setDisplay] = useState({
    query: "",
    list: reports,
  });

  const store = useSelector((state) => state?.users);
  const { usersAuth } = store;
  // const navigate = useNavigate();

  const makeApiCall = async () => {
    let response = await fetch(`${baseURL}/api/posts`);
    let data = await response.json();
    console.log(data);
    setReports(data);
  };

  useEffect(() => {
    makeApiCall();
    console.log(reports);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const results = reports.filter((report) => {
      console.log(e.target.value)
      if (e.target?.value) {return report[sortByField]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());}
        else{
      //set the sortByField for the non-null
      return reports;
        }
    });
    setResult(results);

    setDisplay({
      query: e.target.value,
      list: sortFunction(results, sortType, sortByField),
    });
  };

  function sortFunction(results, sortType, sortByField) {
    if (sortType === "ascending") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "descending") {
      results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
    }
    return results;
  }

  function updateReports(e) {
    setSortType(e);
    setDisplay({
      query: display.query, //page.query
      list: !result
        ? sortFunction(reports, e, sortByField)
        : sortFunction(reports, e, sortByField),
    });
  }

  function sortBy(e) {
    setSortByField(e);
    setDisplay({
      query: display.query,
      list: !result
        ? sortFunction(reports, sortType, e)
        : sortFunction(result, sortType, e),
    });
  }

  const posts = display.list.map((element, index) => (
    <div className="grid-item cards-content">
      <Post
        className="card-indivisual"
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

  return (
    <div>
      <Header />
      {!usersAuth ? (
        <div className="empty">
          <h1>Please sign up an account...</h1>
        </div>
      ) :
      (
      <div className="main">
        <div className="search">
          <form className="sortFunction">
            <div className="form-container">
              <div className="form-1">
                <span>Search</span>
                <input
                  className="admininput"
                  type="search"
                  onChange={handleChange}
                  value={display.query}
                  placeholder="enter the text here"
                />
              </div>
              <div className="form-2">
                <span>Category:</span>
                <select
                  defaultValue={"title"}
                  onChange={(e) => sortBy(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    None
                  </option>
                  <option value="title">Title</option>
                  <option value="description">Description</option>
                </select>
              </div>
              <div className="form-3">
                <span>Sort By:</span>
                <select
                  defaultValue={"DEFAULT"}
                  onChange={(e) => updateReports(e.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    None
                  </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="individual">{posts}</div>
      </div>)}

      {/* <Footer /> */}
    </div>
  );
}
