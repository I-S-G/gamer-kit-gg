import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleCart } from "../../store/cart/cart.action";
import { signOutUser } from "../../utils/firebase.utils";
import { NavbarContainer, NavLogoAndName, NavLogo, NavTitle, NavLinksContainer, NavSignOut, CartContainer, CartSvg, CartNumber } from "./nav-bar.styles.jsx";
import CartDropdown from "../../components/Cart Dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user-selector";
import { selectIsCartOpen, selectCartQuantity } from "../../store/cart/cart.selector";

const NavBar = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const totalQuantity = useSelector(selectCartQuantity);

    const handleToggleCart = () => dispatch(toggleCart());

    const handleSignOut = async () => {
        await signOutUser();
    }
   
    return(
       <Fragment>
            <NavbarContainer>
                
                    <NavLogoAndName to= "/" > 
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

                    <CartContainer onClick= {handleToggleCart}  >
                        <CartSvg />
                        <CartNumber>{totalQuantity}</CartNumber>
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