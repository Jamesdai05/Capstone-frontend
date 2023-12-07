// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Navigation from "./components/navbar/Navigation-bar";
// import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { baseURL } from "./utils/baseUrl";
// import { BrowserRouter } from "react-router-dom";
// import { ReactDOM } from "react";

function App() {
  const [reports, Setreports] = useState([]);

  const makeApiCall = () => {
    fetch(`${baseURL}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Setreports(data.results);
      });
  };

  useEffect(() => {
    makeApiCall();
  },[]);

  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
