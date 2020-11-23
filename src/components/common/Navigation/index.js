import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const Navigation = ({ open }) => {
  return (
    <Sidebar open={open}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <hr></hr>
    </Sidebar>
  );
};
