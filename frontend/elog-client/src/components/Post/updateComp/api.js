import { useEffect, useState } from "react";
import { baseURL } from "../../../utils/baseUrl";

export default function GetData() {
  const [report, setReport] = useState([]);
  // const id = req.params.id;

  const makeApiCall = (req, res) => {
    const id = req.params.id;
    fetch(`${baseURL}/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReport(data);
      });
  };

  useEffect(() => {
    makeApiCall();
  }, []);
}
