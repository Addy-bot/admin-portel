import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import api from "../api/Products";
import { uuid } from "uuidv4";

function Todos() {
  const LOCAL_STORAGE_KEY = "items";
  const [items, setItems] = useState([]);

  const deleteItemHandler = async (id) => {
    const response = await api.delete(`/infos/${id}`);
    const updatedValue = items.filter((a) => {
      return a.id !== response.data;
    });
    console.log(id);
    setItems(updatedValue);
  };

  const getInfos = async () => {
    const response = await api.get("/infos");
    return response.data;
  };

  const addItemHandler = async (i) => {
    console.log(i);
    const request = {
      id: uuid(),
      ...i,
    };

    const response = await api.post("/infos", request);

    setItems([...items, response.data]);
  };

  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await getInfos();
      if (allItems) setItems(allItems);
      console.log("hello");
    };
    getAllItems();
  }, []);

  useEffect(() => {
    sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

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
                  <b>TODOS</b>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App">
        <AddItem addItemHandler={addItemHandler} />
        <ItemList data={items} deleteItemHandler={deleteItemHandler} />
      </div>
    </>
  );
}

export default Todos;
