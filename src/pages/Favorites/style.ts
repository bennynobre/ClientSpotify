import styled from "styled-components";

export const FavoritesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #121212;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
`;

export const FavoritesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    padding-left: 2rem;
`;