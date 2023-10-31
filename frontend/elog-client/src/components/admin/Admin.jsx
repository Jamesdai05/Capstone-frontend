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

  const [result, setResult] = useState();

  //get the data and store to reports.
  const [reports, setReports] = useState({});

  const [page, setPage] = useState({
    query: "",
    list: reports,
  });

  // console.log("test")
  console.log(reports);

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
    e.preventDefault();
    const results = reports.filter((report) => {
      if (e.target.value === "") return reports;
      // console.log(reports);
      return report[sortByField]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setResult(results);

    setPage({
      query: e.target.value,
      list: sortFunction(results, sortType, sortByField),
    });
  };

  // console.log(page.list);

  const sortFunction = (results, sortType, sortByField) => {
    if (sortType === "ascending") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "descending") {
      results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
    }
    return results;
  };

  // Drop down to sort reports in asending or descending on title.
  const updateReports = (e) => {
    setSortType(e);
    setPage({
      query: e.target.value, //page.query
      list: !result
        ? sortFunction(reports, e, sortByField)
        : sortFunction(reports, e, sortByField),
    });
  };

  const sortBy = (e) => {
    setSortByField(e);
    setPage({
      query: e.target.value,
      list: !result
        ? sortFunction(reports, sortType, e)
        : sortFunction(result, sortType, e),
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form action="" className="sortFunction">
        <span>Search</span>
        <input
          className="admininput"
          type="search"
          onChange={handleChange}
          value={page.query}
          placeholder="enter the text here"
        />

        <span>SortBy:</span>
        <select defaultValue={"title"} onChange={(e) => sortBy(e.target.value)}>
          <option value="DEFAULT" disabled>
            None
          </option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>

        <span>Sort By</span>
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
      </form>
      <ul>
        {page.list.map((report) => {
          return (
            <div key={report.title}>
              <h2>{report.title}</h2>
              <p>{report.description}</p>
            </div>
          );
        })}
        {page.list.length === 0 && <h2>Empty list!!!</h2>}
      </ul>
    </div>
  );
}
