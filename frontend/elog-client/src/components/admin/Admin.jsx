import React, { useEffect, useState } from "react";
import postSlices from "../../redux/slices/reports/postSlices";
import axios from "axios";
import { baseURL } from "../../utils/baseUrl";
import { setNestedObjectValues } from "formik";

export default function Admin() {
  //store store sortedBy order
  const [sortType, setSortType] = useState("ascending");

  //store field title or description
  const [sortByField, setSortByField] = useState("title");

  const [results, setResults] = useState();

  //get the data and store to reports.
  const [reports, setReports] = useState({});

  const [page, setPage] = useState({
    query: "",
    list: reports,
  });

  // console.log("test")

  const makeApiCall = async () => {
    let response = await fetch(`${baseURL}/api/posts`);
    let data = await response.json();
    console.log(data);
    setReports(data);
    // console.log(reports);
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const handleChange = (e) => {
    const results = reports.filter((element) => {
      if (e.target.value === "") return reports;
      return reports[sortByField].includes(e.target.value.toLowerCas());
    });
    setResults(results);
    setNestedObjectValues({
      query: e.target.value,
      list: sortFunction(results, sortType, sortByField),
    });
  };

  const sortFunction = (results, sortType, sortByField) => {
    if (sortType === "asending") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "desending") {
      results.sort((a, b) => (a[sortByField] > b[sortByField] ? 1 : -1));
    }
    return results;
  };

  // Drop down to sort reports in asending or descending on title.
  const updateReports = (e) => {
    setSortType(e);
    setPage({
      query: page.query,
      list: !results
        ? sortFunction(reports, e, sortByField)
        : sortFunction(reports, e, sortByField),
    });
  };

  const sortBy = (e) => {
    setSortByField(e);
    setPage({
      query: page.query,
      list: !results
        ? sortFunction(reports, e, sortType)
        : sortFunction(results, e, sortType),
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form action="">
        <span>Search</span>
        <input className="admininput" type="search" value={page.query} />
        <span>SortBy:</span>
        <select
          defaultValue={"title"}
          onChange={(e) => sortBy(e.target.value)}
          id=""
        >
          <option value="DEFAULT" disabled>
            None
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </form>
    </div>
  );
}
