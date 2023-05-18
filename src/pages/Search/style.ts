import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #121212;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  .ContentCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
  }
`

export const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  padding-left: 1rem;
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

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px;
  gap: 20px;
  padding-left: 3rem;
  padding-right: 4rem;
  overflow-y: scroll;
  max-height: 40rem;
`;
