import SignIn from "../../components/Sign In/sign-in.component";
import SignUp from "../../components/Sign Up/sign-up.component";
import { AuthContainer } from "./authentication.styles";

const Authentication = () => {
    return(
        <AuthContainer>
            <SignIn />
            <SignUp />
        </AuthContainer>
    )
}

export default Authentication;