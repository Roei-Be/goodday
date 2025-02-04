import { createContext, useEffect, useState } from 'react';
import Papa from "papaparse";

export const DBContext = createContext();

export const DBContextProvider = ({ children }) => {

    const [bless, setBless] = useState();
    
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQdT39Jdb-AiSPDso_cQcpmy3wbfSqz1xfFAIRETMgc_uJvR4MejOYSZ9ZQoBe4_Ts1FOowzmYzUGOJ/pub?gid=0&single=true&output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setBless(results.data);
            }
        })
        
    },[])

    return (
        <DBContext.Provider value={{
            bless
        }}>{ children }
        </DBContext.Provider>
    )
}