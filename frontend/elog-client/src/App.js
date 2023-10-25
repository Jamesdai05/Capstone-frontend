// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Navigation from "./components/navbar/Navigation-bar";
import Header from "./components/Header/Header";
// import { BrowserRouter } from "react-router-dom";
// import { ReactDOM } from "react";

function App() {
  // const counter = useSelector((state) => state.counter);
  //const dispatch = useDispatch();
  // console.log(counter);
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
