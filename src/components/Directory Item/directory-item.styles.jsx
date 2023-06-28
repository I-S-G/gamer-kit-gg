import styled from "styled-components";

export const DirectoryBody = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(0, 0, 0);
    padding: 20px 40px;
    min-width: 190px;
    opacity: 0.7;
    color: rgb(255, 255, 255);
    border-radius: 4px;
    font-size: 18px;
    transition: 0.6s;
    transition-property: background-color, opacity, color;
`;

export const BackgroundImageContainer = styled.div`
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    background-image: url(${({imgUrl}) => imgUrl});
`;

export const DirectoryItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    flex: 1 1 auto;
    min-width: 30%;
    position: relative;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &:hover {

        ${DirectoryBody} {
            opacity: 1;
            background-color: rgb(241, 241, 241);
            color: black;
        }

        ${BackgroundImageContainer} {
            transform: scale(1.15);
        }
    }
`;

