import React from "react";
import Areachart from "./charts/Areachart";
import Barchart from "./charts/Barchart";
import Piechart from "./charts/Piechart";

function Home() {
  return (
    <div className="my-3 mr-3 flex min-h-screen w-full flex-col rounded-md bg-white">
      <Areachart
        labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
        dataset={[
          [50, 60, 70, 50, 60],
          [20, 30, 40, 50, 70],
        ]}
        datasetLabels={["PT-1", "PT-2"]}
        colors={[
          ["rgb(230,206,247)", "rgb(247,15,225)"],
          ["#b0d980", "#83de14"],
        ]}
      />
      <div className="flex w-2/5 flex-row">
        <Barchart
          labels={["Sci", "Maths", "Eng", "SSc", "Hindi"]}
          dataset={[
            [50, 60, 70, 50, 60],
            [20, 30, 40, 50, 70],
          ]}
          datasetLabels={["PT-1", "PT-2"]}
          colors={[
            ["rgb(230,206,247)", "rgb(247,15,225)"],
            ["#b0d980", "#83de14"],
          ]}
        />
        <Piechart
          labels={["Games", "Dance", "Art", "WE"]}
          dataset={[[20, 40, 10, 30]]}
          colors={[
            ["rgb(230,206,247)", "rgb(247,15,225)", "#b0d980", "#83de14"],
          ]}
        />
      </div>
    </div>
  );
}

export default Home;
