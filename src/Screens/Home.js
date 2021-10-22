import React from "react";
import "./Home.css";
import RadarChart from "../charts/Radar";
import Topitems from "../Components/Topitems";

const Home = () => {
  const data = [
    {
      name: "4°Bureau",
      row: 95,
    },
    {
      name: "Intendance",
      row: 90,
    },
    {
      name: "Transmission",
      row: 65,
    },
    {
      name: "Train",
      row: 62,
    },
    {
      name: "B.Courrier",
      row: 50,
    },
    {
      name: "Tribunal",
      row: 20,
    },
  ];
  return (
    <div className="home-container">
      <div className="RadarContainer">
        <RadarChart />
      </div>

      <div className={"classementcontainer"}>
        <h3>
          Classement des Organes <br />
          selon le taux de conformité
        </h3>
        {data.map((a, i) => (
          <Topitems row={a.row} name={a.name} number={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default Home;
