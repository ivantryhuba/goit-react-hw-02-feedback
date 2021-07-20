import styled from '@emotion/styled';

export const ButtonList = styled.ul`
    width: 100%;
    margin-top: 0;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 40px;
    font-weight: 700;
    color: black;
`;

export const ButtonItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    color: black;
`;

export const ButtonElem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    font-size: 15px;
    font-weight: 700;
    text-transform: capitalize;
    background-color: yellow;
    border: 2px solid green;
    border-radius: 20px;
    cursor: pointer;

    &:hover {
        background-color: azure;
    }
`;
