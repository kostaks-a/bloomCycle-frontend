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
           const response = await axios.post(`${import.meta.env.VITE_HOST}/auth/verify`, undefined, {
                headers: {
                    authorization: `Bearer ${jwt}`
                },
            })
            console.log('DATA: ' + response.data)
            setToken(jwt);
            setIsAuthenticated(true);
            setUser(response.data)
            setIsLoading(false);
            setCurrentUser({...response.data , passwordHash: ''})
            console.log( currentUser)
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

   // if (currentUser) {
    return (
        <SessionContext.Provider value={{ user, setUser, currentUser, setCurrentUser, token , setToken, isAuthenticated, setIsAuthenticated, isLoading, logOutUser }} >{children}</SessionContext.Provider>
   // )
    //} else {
     //   return (
        //    <div className= "loader"></div>
        )
   // }
}

export default SessionContextProvider;