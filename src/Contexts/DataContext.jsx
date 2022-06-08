
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
    const handleIncrement = (id,count) => {
        console.log('count:', count)
        console.log('id:', id)
        let Data =[];
        for(var i = 0; i<data.length; i++) {
            if(data[i].id === id) {
                data[i]["count"] += count;
                Data.push(data[i]);
            }
            else {
                Data.push(data[i]);
            }
        }
        console.log('Data:', Data)
        setData(Data);
    }

    const handleDecrement = (id,count) => {
        console.log('count:', count)
    
    
        console.log('id:', id)
        var Data = [];
        for(var i = 0; i<data.length; i++) {
            if(data[i].id === id) {
                
                if(data[i].count === 0) {
                    Data.push(data[i]);
                }

                else {
                    data[i]["count"] += count;
                    if(data[i].count === 0) {
                        data[i]["done"] = true;
                    }
                    Data.push(data[i]);
                }

            }
            else {
                Data.push(data[i]);
            }
        }
        console.log('Data:', Data)
        setData(Data);

    }
    return (

        <DataContext.Provider value= {{ data, handleData, handleNewData, handleDeleteData, handleIncrement, handleDecrement  }}>{children}</DataContext.Provider>

    )

}