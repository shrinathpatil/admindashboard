import React, { useState } from "react";
import "./NewRoom.scss";
import { Navbar, Sidebar } from "../../components";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { roomInputs } from "../../formSource";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = () => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const { data, loading, error } = useFetch("/api/hotels");

  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  console.log(hotelId);
  console.log(info);
  console.log(data);

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
      const newRoom = await axios.post(`/api/rooms/${hotelId}`, {
        ...info,
        roomNumbers,
      });

      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  placeholder="give comma between roomNumbers"
                  onChange={(e) => setRooms(e.target.value)}
                ></textarea>
              </div>
              <div className="formInput">
                <label>Choose a Hotel</label>
                <select
                  id="hotelId"
                  onChange={(e) => {
                    console.log("acall");
                    setHotelId(e.target.value);
                  }}
                >
                  <option>select one</option>
                  {loading
                    ? "Loading"
                    : data &&
                      data.map((hotel) => {
                        return (
                          <option value={hotel._id} key={hotel._id}>
                            {hotel.name}
                          </option>
                        );
                      })}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
