import { createContext, useState } from "react";

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem("token")) : null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        token,setToken,
        backendUrl, 
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}