import React from "react";
import { Link } from "react-router-dom";

function List(props) {
  const variable_1 = (id) => {
    props.deleteItemHandler(id);
    console.log(id);
  };

  const { id, Name, Price, Shop_Address } = props.data;

  return (
    <>
      <div
        class="ui list"
        style={{
          borderStyle: "ridge",
          borderWidth: "7px",
          borderColor: "magenta",
          backgroundColor: "burlywood",
          padding: "8px",
          marginTop: "20px",
          marginLeft: "40px",
          marginRight: "40px",
          display: "flex",
          marginBottom: "20px",
        }}
      >
        <Link to={{ pathname: "/edit", state: { infos: props.data } }}>
          <div className="editButton">
            <h3>
              <i class="edit icon"></i>
            </h3>
          </div>
        </Link>
        <div class="item" style={{ margin: "0 auto" }}>
          <i class="tasks icon"></i>
          <div class="content">
            <h4>{Name}</h4>
          </div>
        </div>

        <div class="item" style={{ margin: "0 auto" }}>
          <i class="clock icon"></i>
          <div class="content">
            <h4>{Price}</h4>
          </div>
        </div>
        <div className="itemDelete" style={{ float: "right" }}>
          <h3>
            <i class="trash icon" onClick={() => variable_1(id)} />
          </h3>
        </div>
      </div>
    </>
  );
}

export default List;
