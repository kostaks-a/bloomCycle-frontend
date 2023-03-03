import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const verifyToken = async (jwt) => {
        console.log("JWT: ", jwt);
        try {
            await axios.post("http://localhost:5005/auth/verify", undefined, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            })
            setToken(jwt);
            setIsAuthenticated(true);
            setIsLoading(false);
        } catch (error) {
            console.log("Error authenticating Bearer: ", error);
            window.localStorage.removeItem("bearer");
        }
    }

    const removeToken = () => {                  
        // Upon logout, remove the token from the localStorage
        localStorage.removeItem("authToken");
    }

    const logOutUser = () => {                     
        // To log out the user, remove the token
        removeToken();
        // and update the state variables    
        setIsAuthenticated(false);
    }  

    useEffect(() => {
        const localToken = window.localStorage.getItem("bearer");
        console.log("LOCAL TOKEN: ", localToken)
        verifyToken(localToken);
    }, [])

    useEffect(() => {
        if (token) {
            window.localStorage.setItem("bearer", token);
            if (!isAuthenticated) {
                setIsAuthenticated(true);
            }
        }
    }, [token])

    return (
        <SessionContext.Provider value={{ token ,setToken, isAuthenticated, isLoading, logOutUser }} >{children}</SessionContext.Provider>
    )
}

export default SessionContextProvider;