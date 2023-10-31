import React, { useEffect, useState } from "react";
import postSlices from "../../redux/slices/reports/postSlices";
import axios from "axios";
import { baseURL } from "../../utils/baseUrl";


export default function Admin() {
  const [sortType, setSortType]=useState("ascending");
  const [result, setResult] = useState();
  const [data, setData] = useState({
    query:"",
    list: " "
  });

  console.log("test")

  const makeApiCall=()=>{

  fetch(`${baseURL}/api/posts`)
  .then((res)=>res.json())
  .then(data=>console.log(data))
    return data;
  }
  const posts = makeApiCall
  // make an api call to query the data.
  useEffect(
    ()=>{
      makeApiCall();
  },[])


  const handleChange =(e)=>{
    const results =posts.filter(post=>{
      if(e.target.value ==="")return posts;

    })
  }




  return (
    <div>
      <h1>Admin Page</h1>
      <p>This is an Admin Page. It can be acessed only by admin/managers!</p>
    </div>
  );
}
