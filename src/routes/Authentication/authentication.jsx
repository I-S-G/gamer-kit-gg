import SignIn from "../../components/Sign In/sign-in.component";
import SignUp from "../../components/Sign Up/sign-up.component";
import "./authentication.styles.css";

const Authentication = () => {
    return(
        <div className="auth">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;