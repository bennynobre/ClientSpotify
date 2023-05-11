import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  width: 100%;
  height: 100vh;
`

export const SearchContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1rem;
    background-color: #121212;
    gap: 20px;

    input {
        width: 30rem;
        height: 3rem;
        border-radius: 2rem;
        padding-left: 1rem;
        border: none;
        outline: none;
    }

    button {
        width: 3rem;
        height: 3rem;
        border-radius: 5rem;
        background-color: #1ed760;

        &:hover {
            cursor: pointer;
            background-color: #1db954; 
        }
    }
`;
