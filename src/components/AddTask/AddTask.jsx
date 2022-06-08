import React from "react";
import styles from "./addTask.module.css";

import tasks from "../../data/tasks.json";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [text, setText] = useState("");
  const {data, handleNewData } = useContext(DataContext);
  console.log('text:', text)
  return (
    <div className={styles.todoForm} style={{
      border : "1px solid",
      width : "100%",
    }}>
      <input onChange={(event) => {
        setText(event.target.value);
      }} style={{
        width: "89%",
        fontSize : "1.5vw",
        height: "6vh",
        padding: ".5vw .6vw",

      }} data-testid="add-task-input" type="text" />
      <button onClick={() => {
        handleNewData({id : data.length+1, text : text, done : false, count : 1})
      }} style={{
        width: "11%",
        height: "5.9vh",
        fontSize : "1.6vw",
        fontWeight : 600,
      }} data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
