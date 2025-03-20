import { createContext, useState } from "react";
import {toast} from "react-hot-toast";
import axios from "axios";

export const UrlContext = createContext();


export const UrlContextProvider = ({children}) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [myShortUrls,setMyShortUrls] = useState([]);
    const [totalClicks,setTotalClicks] = useState([]);
    
    const getMyShortUrls = async (token) => {
        try {
            const {data} = await axios.get(backendUrl+"/api/urls/myurls",{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer "+token,
                }
            });
            console.log(data);
            setMyShortUrls(data);
        } catch (error) {
            toast.error(error);
        }
    }

    const getTotalClicks = async (token) => {
        try {
            const {data} = await axios.get(backendUrl+"/api/urls/totalClicks",{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer "+token,
                }
            });

            // Convert the response into an array of objects
            const convertedData = Object.keys(data).map((key) => ({
                clickDate: key,
                count: data[key],
            }));

            setTotalClicks(convertedData);
            console.log(convertedData);
        } catch (error) {
            toast.error(error);
        }
        
    }

    const value = {
        backendUrl, 
        myShortUrls,getMyShortUrls,
        totalClicks,getTotalClicks,
    }

    return (
        <UrlContext.Provider value={value}>
            {children}
        </UrlContext.Provider>
    )
}