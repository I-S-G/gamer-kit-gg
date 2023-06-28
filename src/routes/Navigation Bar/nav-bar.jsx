import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user-context";
import { CartContext } from "../../context/cart-context";
import { NavbarContainer, NavLogoAndName, NavLogo, NavTitle, NavLinksContainer, NavSignOut, CartContainer, CartSvg, CartNumber } from "./nav-bar.styles.jsx";
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
            <NavbarContainer>
                
                    <NavLogoAndName to= "./" > 
                        <NavLogo />
                        <NavTitle>Gamer Kit GG</NavTitle>
                    </NavLogoAndName>
                    
                <NavLinksContainer>
                    <Link to = "/shop" >
                        SHOP
                    </Link>
                    <Link to = "/contacts" >
                        CONTACTS
                    </Link>
                    {
                        currentUser ? (
                            <NavSignOut onClick = {handleSignOut}>
                                SIGN OUT
                            </NavSignOut>
                            
                        ) : (
                            <Link to = "/authentication" >
                                SIGN IN
                            </Link>
                        )
                    }

                    <CartContainer onClick= {handleCartOpen}  >
                        <CartSvg />
                        <CartNumber>{cartQuantity}</CartNumber>
                    </CartContainer>

                    {
                        isCartOpen && (<CartDropdown />)
                    }
                </NavLinksContainer>
            </NavbarContainer>
            <Outlet />
       </Fragment>
    )
}

export default NavBar;