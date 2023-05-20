// import React, { useState, useEffect } from 'react'
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { chartColors } from "./colors";
// import "./Common.css";

// import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



// const PieChart = () => {
//   const [chart, setChart] = useState({})
//   var baseUrl = "https://api.coinranking.com/v2/coins/?limit=3";
//   var apiKey = "coinranking2489fc4b66e5be0148cdc4c9b8507aecc062070d4687ca9a";



//   useEffect(() => {
//     const fetchCoins = async () => {
//       await fetch(`${baseUrl}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': `${apiKey}`,
//           'Access-Control-Allow-Origin': "*"
//         }
//       })
//         .then((response) => {
//           if (response.ok) {
//             response.json().then((json) => {
//               console.log(json.data);
//               setChart(json.data)
//             });
//           }
//         }).catch((error) => {
//           console.log(error);
//         });
//     };
//     fetchCoins()
//   }, [baseUrl, apiKey])

//   console.log("chart", chart);
//   var data = {
//     labels: chart?.coins?.map(x => x.name),
//     datasets: [{
//       label: `${chart?.coins?.length} Coins Available`,
//       data: chart?.coins?.map(x => x.price),
//       backgroundColor: [
//         'rgba(152, 216, 158,1)',
//         'rgba(238, 132, 132,1)',
//         'rgba(2246, 220, 125,1)'
//       ],
//       borderColor: [
//         'rgba(152, 216, 158,1)',
//         'rgba(238, 132, 132,1)',
//         'rgba(2246, 220, 125,1)'
//       ],
//       borderWidth: 1
//     }]
//   };
//   var options = {
//     maintainAspectRatio: false,
//     responsive:true,
//     scales: {
//     },
//     legend: {
//       labels: {
//         fontSize: 15,
//       },
//     },
//   }

//   return (
//     <div>
//       <Pie className='Set_Pie'
//         data={data}
//         height={30}
//         width={50}
//         options={options}
//       />
//     </div>
//   )
// }

// export default PieChart;




// import "./styles.css";

const pieOptions = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

function calMean(numData, numLabels) {
  const total = numData.reduce((acc, c) => acc + c, 0);
  const mean = total / numData.length;
  let miscellaneousCount = 0;
  const updatedNumData = [];
  const updatedLables = [];
  for (let curr = 0; curr < numData.length; curr++) {
    if (numData[curr] * 2 < mean) {
      miscellaneousCount += numData[curr];
    } else {
      updatedNumData.push(numData[curr]);
      updatedLables.push(numLabels[curr]);
    }
  }
  updatedNumData.push(miscellaneousCount);
  updatedLables.push("Miscellaneous");
  return { updatedNumData, updatedLables };
}

const pieData = {
  maintainAspectRatio: false,
  responsive: false,
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }
  ]
};

export default function CardBottom1() {
  let chartInstance = null;
  const numData = [1, 2, 3, 4, 5];
  const numLabels = ["a", "a", "b", "c", "d","e"];
  useEffect(() => {
    const { updatedNumData, updatedLables } = calMean(numData, numLabels);
    pieData.labels = updatedLables;
    pieData.datasets[0].data = updatedNumData;
  }, []);
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      <div style={styles.relative}>
        <div style={styles.pieContainer}>
          <Pie
            data={pieData}
            options={pieOptions}
            ref={(input) => {
              chartInstance = input;
            }}
          />
        </div>
        <div id="legend" />
      </div>
    </div>
  );
}

const styles = {
  pieContainer: {
    width: "30vh",
    height: "30vh",
    margin: "auto",
  },
  relative: {
    position: "relative"
  }
};

