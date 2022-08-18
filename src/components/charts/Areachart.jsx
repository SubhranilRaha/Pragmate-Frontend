import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Areachart({ labels, dataset, datasetLabels, colors }) {
  let delayed;
  const chart = useRef();
  const hoverActiveLine = (elementDatasetIndex, thickness) => {
    if (elementDatasetIndex >= 0) {
      let element = chart.current.config.data.datasets[elementDatasetIndex];
      element.borderWidth = thickness;
      element.borderColor = element.hoverBorderColor;
    } else {
      chart.current.config.data.datasets.map((dataset) => {
        dataset.borderWidth = thickness;
        dataset.borderColor = dataset.defaultColor;
      });
    }
    chart.current.update();
  };
  const bgGradient = (ctx, chartArea, scales, color) => {
    const { left, right, top, bottom, width, height } = chartArea;
    const { x, y } = scales;
    const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom);
    gradientBackground.addColorStop(0, color);
    gradientBackground.addColorStop(1, "rgba(256,256,256,0)");
    return gradientBackground;
  };
  const processedData = dataset.map((item, index) => {
    return {
      id: index,
      label: datasetLabels[index],
      data: item,
      responsive: true,
      fill: true,
      borderWidth: 2,
      borderColor: colors ? colors[index][0] : "gray",
      backgroundColor: (context) => {
        const color = colors ? colors[index][0] : "gray";
        const chart = context.chart;
        const { ctx, chartArea, scales } = chart;
        if (!chartArea) {
          return null;
        }
        return bgGradient(ctx, chartArea, scales, color);
      },
      hoverBorderColor: colors ? colors[index][1] : "gray",
      defaultColor: colors ? colors[index][0] : "red",
      borderDash: [20],
      borderJoinStyle: "round",
      borderCapStyle: "round",
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
      pointStyle: "rectRounded",
    };
  });
  return (
    <div className="m-3 flex items-center justify-center rounded-3xl shadow-xl">
      <Line
        ref={chart}
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: processedData,
        }}
        options={{
          maintainAspectRatio: true,
          layout: {
            padding: 8,
          },
          onHover: (event, chartElement) => {
            if (chartElement[0]) {
              hoverActiveLine(chartElement[0].datasetIndex, 3);
            } else {
              hoverActiveLine(-1, 2);
            }
          },
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (
                context.type === "data" &&
                context.mode === "default" &&
                !delayed
              ) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "right",
              labels: {
                usePointStyle: true,
              },
            },
          },
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 100,
              // grid:{
              //   display: false
              // }
            },
          },
        }}
      />
    </div>
  );
}

export default Areachart;

// call example:
// <Areachart
//           labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
//           dataset={[
//             [50, 60, 70, 50, 60],
//             [20, 30, 40, 50, 70],
//           ]}
//           datasetLabels={["PT-1", "PT-2"]}
//           colors={[
//             ["rgb(230,206,247)", "rgb(247,15,225)"],
//             ["#b0d980", "#83de14"],
//           ]}
//         />
