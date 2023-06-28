import styled from "styled-components";
import Button from "../Button/button.component";

export const CartItemsContainer = styled.div`
    position: absolute;
    border: 1px solid black;
    background-color: white;
    bottom: -390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 18px;
    width: 300px;
    height: 400px;
    border-radius: 2px;
`;

export const CartItemsList = styled.div`
    display: flex;
    flex-direction: column;
    height: 82%;
    width: 100%;
    overflow-y: auto;
    scrollbar-gutter: stable;
    margin: 15px 0px;
`;


export const CheckoutButton = styled(Button)`
    width: 80%;
    margin-bottom: 14px;
    height: 45px;
`;

export const CartItem = styled.div`
    display: flex;
    column-gap: 14px;
    margin-bottom: 10px;
    margin-left: 6px;
`;

export const CartItemImg = styled.img`
    width: 30%;
    height: 90px;
    border: 1px solid black;
    object-fit: contain;
`;

export const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Empty = styled.span`
    margin: auto;
    font-size: 18px;
`;