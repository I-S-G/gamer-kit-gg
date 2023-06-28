import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as GG } from "./assets/gg.svg";
import { ReactComponent as Cart } from "./assets/cart.svg";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: rgb(30,33,36);
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
`;

export const NavLogoAndName = styled(Link)`
    margin-left: 10px;
    color: white;
    display: flex;
    align-items: center;
    width: 22.5%;
`;

export const NavLogo = styled(GG)`
    height: 100%;
    width: 30%;

`;

export const NavTitle = styled.span`
    font-size: 38px;
    margin-left: 2px;
`;

export const NavLinksContainer = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    margin-right: 12px;
`;

export const NavSignOut = styled.span`
    color: white;
    cursor: pointer;
`;

export const CartContainer = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 14px;
    cursor: pointer;
`;

export const CartSvg = styled(Cart)`
    width: 100%;
    height: 100%;
`;

export const CartNumber = styled.span`
    position: absolute;
    color: white;
    margin-top: 6px;
    font-size: 14px;
    user-select: none;
`;