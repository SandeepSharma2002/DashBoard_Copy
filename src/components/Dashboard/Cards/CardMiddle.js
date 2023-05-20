import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line} from "react-chartjs-2";
import "./CardMiddle.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function CardMiddle() {
  const data = {
    labels: [
      "01/01/2019",
      "02/01/2019",
      "03/01/2019",
      "04/01/2019",
      "05/01/2019",
      "06/01/2019",
      "07/01/2019"
    ],
    backgroundColor: ['rgba(255,0,0,1)'],
    // lineTension: 1,
    datasets: [
      {
        label: "Guest",
        fill: false,
        tension:0.4,
        borderColor: "rgba(255, 0, 0, 0.3)",
        borderWidth: 3,
        // pointRadius: 2,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Users",
        fill: false,
        tension:0.4,
        borderColor: "rgba(0, 255, 0, 0.3)",
        borderWidth: 3,
        // pointRadius: 2,
        data: [70, 32, 95, 65, 87, 62, 30]
      },
    ]
  };

  var options = {
    maintainAspectRatio: false,
    responsive:true,
    legend: {
      position: "right",
      labels: {
        boxWidth: 0
      }
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false }
        }
      ]
    }
  };

  return (
    <div className="App_main"/* style={{height:"50vh"}}*/>
      <Line data={data} options={options} />
    </div>
  );
}