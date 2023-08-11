import { AnyAction } from "redux";
import { signInFailed, signOutFailed, signUpFailed, signInSuccess, signOutSuccess } from "./user.action";
import { UserData } from "../../utils/firebase.utils";

export type UserState = {
    readonly currentUser: null | UserData;
    readonly isLoading: boolean;
    readonly error: null | Error;
}

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

    if (signInSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload
        }
    }

    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null
        }
    }

    if (signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action)) {
        return {
            ...state,
            error: action.payload
        } 
    }
   
    return state;

}

