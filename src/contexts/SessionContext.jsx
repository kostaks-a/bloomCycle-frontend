import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState("");
    const [user, setUser] = useState(undefined);

    const verifyToken = async (jwt) => {
        //console.log("JWT: ", jwt);
        if (jwt) {
        try {
           const response = await axios.post("http://localhost:5005/auth/verify", undefined, {
                headers: {
                    authorization: `Bearer ${jwt}`
                },
            })
            console.log(response.data)
            setToken(jwt);
            setIsAuthenticated(true);
            setUser(response.data)
            setIsLoading(false);
            setCurrentUser({...response.data , passwordHash: ''})
        } catch (error) {
            console.log("Error authenticating Bearer: ", error);
            window.localStorage.removeItem("bearer");
        }
    }}

    const removeToken = () => {                  
        // Upon logout, remove the token from the localStorage
        localStorage.removeItem("bearer");
    }

    const logOutUser = () => {                     
        // To log out the user, remove the token
        removeToken();
        // and update the state variables    
        setIsAuthenticated(false);
    }  

    useEffect(() => {
        const localToken = window.localStorage.getItem("bearer");
        //console.log("LOCAL TOKEN: ", localToken)
        verifyToken(localToken);
        setToken(localToken)
    }, [])

    useEffect(() => {
        if (token) {
            window.localStorage.setItem("bearer", token);
            if (!isAuthenticated) {
                setIsAuthenticated(true);
            }
        }
    }, [token])

    //if(!user) {return <p>Loading</p>}
    
    return (
        <SessionContext.Provider value={{ user, setUser, currentUser, token , setToken, isAuthenticated, setIsAuthenticated, isLoading, logOutUser }} >{children}</SessionContext.Provider>
    )
    }


export default SessionContextProvider;