import styled from 'styled-components';
import { InvertedButton } from '../Button/button.styles';



export const ShopItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 320px;
    position: relative;
    cursor: pointer;
    border: 1px black solid;

    ${InvertedButton} {
        position: absolute;
        width: 80%;
        bottom: 50px;
        visibility: hidden;
   
    }

    &:hover ${InvertedButton} {
        visibility: visible;
    }
`;

export const ItemImage = styled.img`
    height: 85%;
    margin-bottom: 8px;
    object-fit: contain;
    width: 100%;
`;

export const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
`;

