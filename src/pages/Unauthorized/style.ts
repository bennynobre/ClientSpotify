import styled from 'styled-components'

export const UnauthorizedContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 2rem;
    color: #fff;
  }
`

export const TryAgainButton = styled.button`
  width: 15rem;
  height: 5rem;
  background-color: #49f585;
  border-radius: 5rem;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: #1db954;
  }
`
