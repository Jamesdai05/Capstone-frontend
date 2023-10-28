import React from "react";
import "./show.css";
import { Button } from "react-bootstrap";

export default function Show() {
  return (
    <div className="showContainer">
      <h1 className="reportTitle">Users report</h1>
      <div className="show-sub">
        <div>
          <p className="postBy">PostedBy:</p>
        </div>
        <div>
          <p className="post-at">Posted at:</p>
        </div>
      </div>
      <div>
        <p className="show-Main">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde iusto
          quidem vitae magnam. Odit, ratione excepturi est necessitatibus dolore
          vitae nemo! Consequatur debitis eos fuga quasi dolorem ratione
          voluptas ipsum! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Unde iusto quidem vitae magnam. Odit, ratione excepturi est
          necessitatibus dolore vitae nemo! Consequatur debitis eos fuga quasi
          dolorem ratione voluptas ipsum! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Unde iusto quidem vitae magnam. Odit,
          ratione excepturi est necessitatibus dolore vitae nemo! Consequatur
          debitis eos fuga quasi dolorem ratione voluptas ipsum!
        </p>
      </div>
      <div>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Button variant="primary" type="submit">
          Delete
        </Button>
      </div>
    </div>
  );
}
