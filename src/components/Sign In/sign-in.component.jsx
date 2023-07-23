import { useState } from "react";
import { useDispatch } from 'react-redux';

import { signInWithEmail } from "../../utils/firebase.utils";
import { googleSignInStart, googleRedirectSignInStart } from '../../store/user/user-action';
import FormInput from "../Form Input/form-input.component";
import Button from "../Button/button.component";
import { SignInContainer, GoogleButtons, Title, Subtitle } from "./sign-in.component.styles";

const SignIn = () => {

    const defaultFormFields = {
        email: "",
        password: ""
    }

    const dispatch = useDispatch();
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const logGooglePopupUser = () => dispatch(googleSignInStart());
        
    const logGoogleRedirectUser = () => dispatch(googleRedirectSignInStart());

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInWithEmail(email, password);
            console.log(user);
            setFormFields(defaultFormFields);
        }
        catch (error) {
            switch(error.code) {
                case("auth/user-not-found"): alert("user not found");
                break;
                default: console.log(error);
                break;
            }
           
        }
    }

    return(
        <SignInContainer>
            <Title>I have an account</Title>
            <Subtitle>Sign in with email and password</Subtitle>
            <form onSubmit={handleSubmit}>
                <FormInput label= "Email" type = "email" name = "email" value = {email} onChange = {handleChange} required />
                <FormInput label= "Password" type = "password" name = "password" value = {password} onChange = {handleChange} required />
                <Button> sign in </Button>
            </form>
            <GoogleButtons>
                <Button onClick={logGooglePopupUser} buttonType= "google"> 
                    Sign in with google popup
                </Button>
                <Button onClick={logGoogleRedirectUser} buttonType= "google">
                    Sign in with google redirect
                </Button>
            </GoogleButtons>
        </SignInContainer>
    )
}

export default SignIn;