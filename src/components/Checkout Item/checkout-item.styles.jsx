import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid grey;
    height: 200px;
`;

export const ItemImage = styled.img`
    height: 150px;
    width: 130px;
    object-fit: contain;
    border: 1px solid black;
`;

export const ItemName = styled.span`
    width: 22%;
    margin: 0 45px 0 45px;
`;

export const ItemQuantityContainer = styled.span`
    width: 20%;
    margin-right: 10px;
    display: flex;
    user-select: none;
    align-items: center;
`;

export const QuantityChangeButton = styled.div`
    cursor: pointer;
`;

export const QuantityNumber = styled.span`
    margin: 0 4px;
    display: flex;
    justify-content: center;
    width: 18px;
`;

export const ItemPrice = styled.span`
    width: 23%;
`;

export const RemoveItemButton = styled.div`
    cursor: pointer;
    justify-self: end;
    font-weight: bold;
    user-select: none;
`;