import { createContext, useState, useEffect } from "react";
import { authListener } from "../utils/firebase.utils";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = authListener((user) => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    return(
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}