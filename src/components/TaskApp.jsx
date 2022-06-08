import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}

      <TaskHeader />
      {/* Add Task */}
      <AddTask />
      {/* Tasks */}
      <Tasks />
    </div>
  );
};

export default TaskApp;
