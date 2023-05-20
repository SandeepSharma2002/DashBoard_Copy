import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { chartColors } from "./colors";
import "./CardBottom1.css";

ChartJS.register(ArcElement, Tooltip, Legend);
// const options = {
//   legend: {
//     display: false,
//     position: "right"
//   },
//   elements: {
//     arc: {
//       borderWidth: 0
//     }
//   }
// };

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function(chart) {

      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>
      ];
    }
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }
  ]
};

// const pieData = {
//   maintainAspectRatio: false,
//   responsive: false,
//   labels: ["usa", "europe", "africa"],
//   datasets: [
//     {
//       data: [200, 150, 20, 10],
//       backgroundColor: chartColors,
//       hoverBackgroundColor: chartColors
//     }
//   ]
// };

export default function CardBottom1() {
  let chartInstance = null;

  return (
    <div className="B_main">
          <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
    </div>
  );
}


