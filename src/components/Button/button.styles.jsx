import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 140px;
    padding: 14px 12px;
    font-size: 15px;
    text-transform: capitalize;
    cursor: pointer;
    color: white;
    background-color: black;
    border: none;
    border-radius: 2px;
    transition: 0.15s;
    transition-property: background-color, color, opacity;

    &:hover {
        background-color: white;
        color: black;
        border: 1px black solid;
        padding: 13px 11px;
    }

    &:active {
        background-color: green;
        color: white;
        border: none;
        opacity: 0.7;
        padding: 14px 12px;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px black solid;
    padding: 13px 11px;

    &:hover {
        padding: 14px 12px;
        border: none;
        color: white;
        background-color: black;
    }

    &::active {
        background-color: green;
        color: white;
    }

`;

export const GoogleButton = styled(BaseButton)`
    background-color: rgb(1, 126, 243);
    color: white;
    padding: 12px 10px;
    border: 2px outset black;

    &:hover {
        background-color: rgb(1, 126, 243);
        color: white;
        border: none;
        padding: 14px 12px 14px 12px;
    }

    &:active {
        opacity: 0.8;
     
    }
`;