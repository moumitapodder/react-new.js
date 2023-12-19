import React from "react";
import Card from "./components/Card";

function Appi(props) {
  console.log("props");
  return (
    <>
      <div>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Card
            title={"test2"}
            desc={"desc1"}
            imgSrc={"https://picsum.photos/200/300"}
            capacity={"100gm"}
          />
          <Card
            title={"test1"}
            desc={"desc2"}
            imgSrc={"https://picsum.photos/250/300"}
            capacity={"1000gm"}
          />
          <Card
            title={"THESE IS A FLOWER"}
            desc={"desc3"}
            imgSrc={"https://picsum.photos/210/300"}
            capacity={"1200gm"}
          />
        </div>
      </div>
    </>
  );
}

export default Appi;
