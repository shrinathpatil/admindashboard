import React, { useEffect, useState } from "react";
import "./Datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(`/api/${path}`);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [data]);

  console.log(data);
  // console.log(list);
  const handleDelete = async (id) => {
    // console.log(id);
    if (path === "rooms") {
      const { data: hotels } = await axios.get("/api/hotels");
      const rooms = hotels.map((h) => ({ _id: h._id, rooms: h.rooms }));
      // console.log(rooms);
      const ids = rooms.filter((r) => r.rooms.includes(id));

      ids.map(async (hid) => {
        try {
          await axios.delete(`/api/rooms/${id}/${hid._id}`);
        } catch (err) {}
      });

      setList(list.filter((item) => item._id !== id));
    } else {
      try {
        await axios.delete(`/api/${path}}`);
        setList(list.filter((item) => item._id !== id));
      } catch (error) {}
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/test`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path.toUpperCase()}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
