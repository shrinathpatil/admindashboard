import React from "react";
import "./Home.scss";
import {
  Charts,
  Featured,
  Navbar,
  Sidebar,
  Tables,
  Widgets,
} from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
