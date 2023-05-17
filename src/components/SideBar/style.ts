import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  background-color: #202020;

  h1 {
    color: #fff;
    padding-left: 1rem;
    font-size: 2rem;
  }

  li {
    color: #b3b3b3;
    padding-top: 2rem;
    font-size: 1.5rem;
    padding-left: 1rem;

    span {
        padding-right: 1rem;
    }

    a {
      text-decoration: none;
      color: #b3b3b3;
      font-size: 1.5rem;

      &:hover {
        cursor: pointer;
        color: #fff;
      }
    }

    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }
`
