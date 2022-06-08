
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
    const handleDeleteData = (id) => {
        console.log('id:', id)
        let Data = data.filter((a) => {
            // console.log('a:', a)
            return a.id !== id
        })
        console.log('data:', Data)
        setData(Data);
    }
    return (

        <DataContext.Provider value= {{ data, handleData, handleNewData, handleDeleteData }}>{children}</DataContext.Provider>

    )

}