import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

function ItemList(props) {

  const getId = (id) => {
    props.deleteItemHandler(id);
    console.log(id);
  };

  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1
            class="ui header"
            style={{
              textAlign: "center",
              fontSize: "50px",
              color: "navy",
              marginTop: "8px",
            }}
          >
            <Link to="/">
              <button
                class="ui button"
                type="submit"
                style={{
                  backgroundColor: "navy",
                  color: "whitesmoke",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                Main Page
              </button>
            </Link>
            <h2>Below is the List of Tasks you have Created👇</h2>
          </h1>
          <div
            style={{
              borderStyle: "ridge",
              borderWidth: "5px",
              borderColor: "black",
              margin: "40px",
            }}
          >
            {props.data.map((a, index) => {
              return <List data={a} deleteItemHandler={getId} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemList;
