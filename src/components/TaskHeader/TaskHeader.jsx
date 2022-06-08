import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task" style={{

        border : "0px solid",
        fontSize : "1.2vw"

      }}>You have {unCompletedTask} of</b>
      <b data-testid="header-total-task" style={{
        border : "0px solid",
        fontSize : "1.2vw"
      }}>{totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
