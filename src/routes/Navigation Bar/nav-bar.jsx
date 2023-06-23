import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user-context";
import { CartContext } from "../../context/cart-context";
import "./nav-bar.styles.css";
import { ReactComponent as GG } from "./assets/gg.svg";
import { ReactComponent as Cart } from "./assets/cart.svg";
import CartDropdown from "../../components/Cart Dropdown/cart-dropdown.component";

const NavBar = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);

    const handleSignOut = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    const handleCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
   
    return(
       <Fragment>
            <div className="nav-bar">
                
                    <Link to= "./" className="logo-and-name-container" > 
                        <GG className = "logo" />
                        <span className="name">Gamer Kit GG</span>
                    </Link>
                    
                <div className="links-container">
                    <Link to = "/shop" >
                        SHOP
                    </Link>
                    <Link to = "/contacts" >
                        CONTACTS
                    </Link>
                    {
                        currentUser ? (
                            <span className="sign-out" onClick = {handleSignOut}>
                                SIGN OUT
                            </span>
                            
                        ) : (
                            <Link to = "/authentication" >
                                SIGN IN
                            </Link>
                        )
                    }

                    <div className="cart-container" onClick= {handleCartOpen}  >
                        <Cart className = 'cart' />
                        <span className="cart-number">{cartQuantity}</span>
                    </div>

                    {
                        isCartOpen && (<CartDropdown />)
                    }
                </div>
            </div>
            <Outlet />
       </Fragment>
    )
}

export default NavBar;