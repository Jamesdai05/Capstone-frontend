// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navbar/Header";
import Main from "./components/Main";
// import { BrowserRouter } from "react-router-dom";
// import { ReactDOM } from "react";

function App() {
  // const counter = useSelector((state) => state.counter);
  //const dispatch = useDispatch();
  // console.log(counter);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
