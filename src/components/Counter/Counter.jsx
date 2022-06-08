import React from "react";
import styles from "./counter.module.css";

import { DataContext } from "../../Contexts/DataContext";
import { useState, useEffect, useContext } from "react";

const Counter = ({ counter, id }) => {

  const { handleIncrement, handleDecrement } = useContext(DataContext);
  // sample value to be replaced
  let count = counter;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={() => {
        handleIncrement(id,1);
      }}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={() => {
        handleDecrement(id,-1);
      }}>-</button>
    </div>
  );
};

export default Counter;
