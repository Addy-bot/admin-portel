import React from "react";
import DashItems from "./DashItems";

function DashList(props) {

    

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "40px" }}>
        {props.data.map((a, index) => {
          return <DashItems data={a} />;
        })}
      </div>
    </>
  );
}

export default DashList;
