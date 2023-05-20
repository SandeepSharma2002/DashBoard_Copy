import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar/Navbar";
import CardList from "./Cards/CardList";
import "./Dashboard.css";
import Card2 from "./Reusable/Card2";
import CardBottom2 from "./Cards/CardBottom2";
import CardBottom1 from "./Cards/CardBottom1";
import CardMiddle from "./Cards/CardMiddle";
export default function Dashboard() {
  return (
    <div className="db_container">
      <div className="Left_side">
      <Sidebar />
      </div>
      <div className="Right_side">
        <Navbar />
        <CardList />
        <div className="Cards_bottom">
          <Card2 title="Activities" text="May-June 2023" component = {<CardMiddle/>} />
          <div className="Min_cards">
            <Card2 title="Top Products" text="May-June 2023" component = {<CardBottom1/>}/>
            <Card2 title="Top Schedules" text="See All" component = {<CardBottom2/>} />
          </div>
        </div>
      </div>
    </div>
  );
}
