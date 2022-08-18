import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

function Piechart({ labels, dataset, colors }) {
  const processedData = dataset.map((item, index) => {
    return {
      id: index,
      label: "Annual",
      data: item,
      responsive: true,
      fill: true,
      borderWidth: 2,
      hoverOffset: 20,
      backgroundColor: colors ? colors[index] : "red",
    };
  });
  return (
    <div className="m-3 flex items-center justify-center rounded-3xl shadow-xl drop-shadow-xl">
      <Pie
        data={{
          labels: labels,
          datasets: processedData,
        }}
        options={{
          layout: {
            padding: 8,
          },
        }}
      />
    </div>
  );
}

export default Piechart;

// call example:
// <Piechart
//           labels={["Games", "Dance", "Art", "WE"]}
//           dataset={[[20, 40, 10, 30]]}
//           colors={[
//             ["rgb(230,206,247)", "rgb(247,15,225)", "#b0d980", "#83de14"],
//           ]}
//         />
