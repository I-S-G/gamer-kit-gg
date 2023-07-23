import { useState } from "react";
import { useDispatch } from 'react-redux';

import { signUpStart } from "../../store/user/user-action";
import FormInput from "../Form Input/form-input.component";
import Button from "../Button/button.component";
import { SignUpContainer, Title, Subtitle } from "./sign-up.styles";

const SignUp = () => {

    const dispatch = useDispatch();

    const defaultFormFields = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match')
            return;
        } 
        dispatch(signUpStart(email, password, displayName));
        setFormFields(defaultFormFields);
    }

    return(
        <SignUpContainer>
            <Title>I don't have an account</Title>
            <Subtitle>Sign up with email and password</Subtitle>
            <form className="sign-up-form" onSubmit={handleSubmit}> 
                <FormInput label = "Display Name" required type = "text" name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label = "Email" required type = "email" name="email" value={email} onChange={handleChange} />
                <FormInput label = "Password" required type = "password" name="password" value={password} onChange={handleChange} />
                <FormInput label = "Confirm Password" required type = "password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                <Button> sign up </Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;