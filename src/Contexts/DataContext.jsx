
import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({children}) =>{
    const [data, setData] = useState([]);
    console.log('datainContext:', data)
    const handleData = (value) =>{
        setData(value);
    }
    const handleNewData = (newData) => {
        setData([...data, newData]);
    }
    
    return (

        <DataContext.Provider value= {{ data, handleData, handleNewData }}>{children}</DataContext.Provider>

    )

}