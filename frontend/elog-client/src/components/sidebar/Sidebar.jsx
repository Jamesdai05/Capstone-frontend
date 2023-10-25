import React from "react";
import "./sidebar.css";
import image from "./image-733856.jpg";

export default function Sidebar() {
  // const imgStyle = {
  //   width: "600px",
  //   height: "600px",
  // };
  return (
    <div className="sidebar">
      <div className="sideItem">
        <span className="sidebarTitle">About</span>
        <div className="imgcontent">
          <img
            className="sidebarImg"
            src={image}
            // src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt="gift"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, culpa.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
          <li className="sideBarListItem">Common Engineering</li>
          <li className="sideBarListItem">Equipment FAT</li>
          <li className="sideBarListItem">QA Engineering</li>
          <li className="sideBarListItem">Production Engineering</li>
          <li className="sideBarListItem">Metrology Test</li>
          <li className="sideBarListItem">Process Qualification</li>
        </ul>
      </div>
    </div>
  );
}
