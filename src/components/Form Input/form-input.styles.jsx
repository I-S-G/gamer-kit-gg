import styled, { css } from "styled-components";

const shrinkLabel = css`
    font-size: 12px;
    top: -12px;
`;

export const Group = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 25px 0;
`;

export const Label = styled.label`
    position: absolute;
    font-size: 16px;
    left: 5px;
    color: grey;
    transition: ease all 300ms;
    pointer-events: none;

    ${({shrink}) => shrink && shrinkLabel }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0px 10px 0px 5px;
    border: none;
    border-bottom: 1px solid black;
    height: 48px;
    font-size: 16px;

    &:focus {
        outline: none;
    }

    &:focus ~ ${Label} {
        ${shrinkLabel}
    }
`;
