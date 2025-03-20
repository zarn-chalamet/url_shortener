import { createContext, useEffect, useState } from "react";
import {toast} from "react-hot-toast";

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {

    const [token,setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem("token")) : null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    // Decode JWT and check expiry
    const isTokenExpired = (token) => {
        try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = JSON.parse(atob(base64));
        const now = Math.floor(Date.now() / 1000); // in seconds
        return jsonPayload.exp < now;
        } catch (error) {
        console.error("Invalid token", error);
        return true;
        }
    };

    const getAuthState = () => {
        try {
          if (token) {
            if (isTokenExpired(token)) {
              toast.error("Session expired. Please log in again.");
              handleLogout();
            } else {
              setIsLoggedIn(true);
            }
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to check authentication.");
          setIsLoggedIn(false);
        }
    };

    const handleLogout = () => {
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem("token");
    };

    useEffect(() => {
        getAuthState();
    }, [token]);

    const value = {
        token,setToken,
        backendUrl, 
        isLoggedIn,
        handleLogout,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}