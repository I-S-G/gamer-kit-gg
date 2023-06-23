import { signInWithGooglePopup, signInWithGoogleRedirect, getRedirectR, createUser, signInWithEmail } from "../../utils/firebase.utils";
import { useEffect, useState } from "react";
import FormInput from "../Form Input/form-input.component";
import Button from "../Button/button.component";
import "./sign-in.component.styles.css";

const SignIn = () => {

    const defaultFormFields = {
        email: "",
        password: ""
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    useEffect(() => {
        const fetchDataAndCreateUser = async () => {
            const response = await getRedirectR();
            if (response != null) {
                const userRef = await createUser(response.user);
                console.log(userRef);
            }
        }

        fetchDataAndCreateUser();

    }, []);

    const logGooglePopupUser = async () => {
        try {

            const { user } = await signInWithGooglePopup();
            const response = await createUser(user);
            console.log(response);
        } catch (error) {
            switch (error.code) {
                case ("auth/popup-closed-by-user"): console.log("popup closed by user");
                break;
                default: console.log(error.code);
                break;
            }
        }
    }

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
        <div className="sign-in">
            <h2 className="title">I have an account</h2>
            <span className="subtitle">Sign in with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label= "Email" type = "email" name = "email" value = {email} onChange = {handleChange} required />
                <FormInput label= "Password" type = "password" name = "password" value = {password} onChange = {handleChange} required />
                <Button label= "sign in" />
            </form>
            <div className="google-buttons-container">
                <Button onClick={logGooglePopupUser} label = "Sign in with google popup" buttonType= "google" /> 
                <Button onClick={signInWithGoogleRedirect} label = "Sign in with google redirect" buttonType= "google" />
            </div>
        </div>
    )
}

export default SignIn;