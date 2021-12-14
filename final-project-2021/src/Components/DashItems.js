import React from "react";

function DashItems(props) {
  const {
    image,
    Name,
    Designation,
    Department,
    Reporting_Manager,
    Joining_Date,
  } = props.data;

  return (
    <>
      <div style={{ padding: "30px", zIndex: "-1" }}>
        <div class="ui card">
          <div class="image">
            <img src={image} />
          </div>
          <div class="content">
            <a class="header">
              {Name}
              <span class="date" style={{ float: "right" }}>
                <h6>{Joining_Date}</h6>
              </span>
            </a>
            <div class="description"><h5>Designation: {Designation}</h5></div>
          </div>
          <div class="extra content"><h5>Department: {Department}</h5></div>
          <div class="extra content"><h6>Reporting Manager: {Reporting_Manager}</h6></div>
        </div>
      </div>
    </>
  );
}

export default DashItems;
