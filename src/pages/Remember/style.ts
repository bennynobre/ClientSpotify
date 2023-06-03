import styled from "styled-components";

export const RememberContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #121212;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    h1 {
        color: #fff;
    }

    p {
        color: #fff;
    }
`;

export const RememberHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
    padding-left: 1rem;

    button {
        width: 6rem;
        height: 4rem;
        border-radius: 5rem;
        background-color: #1ed760;
        gap: 4rem;
        margin: 1rem;
        cursor: pointer;
        border: none;
        outline: none;
    }
`;

export const TopTracksColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 40%;
    padding-left: 1rem;
`;

export const RememberContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
`;