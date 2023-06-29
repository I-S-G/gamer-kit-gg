import { createContext, useEffect, useReducer } from "react";
import { authListener } from "../utils/firebase.utils";
import { createAction } from "../utils/reducer.utils";

export const UserContext = createContext(null);

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {

    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled action type: ${type} at userReducer`);
    } 
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
            );
    };

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