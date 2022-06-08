import React from "react";
import styles from "./task.module.css";

import Counter from "../Counter/Counter";
import tasks from "../../data/tasks.json";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";

const Task = () => {
  console.log("tasks :",tasks)
  // const [data, setData] = useState([]);
  const  { data, handleData, handleDeleteData } = useContext(DataContext);
  console.log('dataContext:', data)

  useEffect(() => {

    handleData(tasks);

  },[])


  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
    
      {data.map((element, index) => {
        return (
          
            <li key={index+1} data-testid="task" className={styles.task}>
              {element.done ? <>
                    <input type="checkbox" data-testid="task-checkbox" checked/>
                    <div data-testid="task-text" style={{
                      textDecoration : "line-through"
                    }}>{element.text}</div>
                  </>
              : <>
                <input type="checkbox" data-testid="task-checkbox"/>
                <div data-testid="task-text">{element.text}</div>
              </>
              }
              {/* Counter here */}
        
              <Counter counter = {element.count} />
              <button onClick={() => {
                handleDeleteData(element.id)
              }} data-testid="task-remove-button">x</button>
            </li>
          )
      })}
    
    </>
  );
};

export default Task;
