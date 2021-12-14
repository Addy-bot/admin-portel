import React, { useState, useEffect } from "react";
import api from "../api/Products";
import DashList from "./DashList";

function Dashboard() {
  const [items, setItems] = useState([]);

  const getInfos = async () => {
    const response = await api.get("/dashboard");
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllItems = async () => {

      const allItems = await getInfos();
      if (allItems) setItems(allItems);
    };
    getAllItems();
    
  }, []);

  return (
    
    <>
      <div
        style={{
          marginLeft: "425px",
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        <div class="ui cards">
          <div
            class="card"
            style={{            
              borderRadius: 15,
              marginRight: "50px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              border: "2px solid black",
              backgroundColor: "#A2D2FF",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
            }}
          >
            <div class="content">
              <div class="header">
                <h2>
                  <b>DASHBOARD</b>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashList data={items} />
    </>
   
  );
}

export default Dashboard;
