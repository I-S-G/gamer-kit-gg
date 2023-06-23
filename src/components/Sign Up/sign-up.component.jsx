import { useState } from "react";
import { createUser, createUserWithEmail } from "../../utils/firebase.utils";
import FormInput from "../Form Input/form-input.component";
import Button from "../Button/button.component";
import "./sign-up.styles.css";

const SignUp = () => {

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await createUserWithEmail(email, password);
            const userRef = await createUser(user, {displayName});
            console.log(userRef);
            setFormFields(defaultFormFields);
        }
        catch(error) {
            switch(error.code) {
                case "auth/network-request-failed": alert("Network Problem");
                break;
                default: console.log(error);
                break;
            }
            
        }
    }

    return(
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span className="subtitle">Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}> 
                <FormInput label = "Display Name" required type = "text" name="displayName" value={displayName} onChange={handleChange} />
                <FormInput label = "Email" required type = "email" name="email" value={email} onChange={handleChange} />
                <FormInput label = "Password" required type = "password" name="password" value={password} onChange={handleChange} />
                <FormInput label = "Confirm Password" required type = "password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                <Button label= "sign up" />
            </form>
        </div>
    )
}

export default SignUp;