import React from "react";
import "./List.scss";
import { Datatable, Navbar, Sidebar } from "../../components";

const List = ({ columns }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default List;
