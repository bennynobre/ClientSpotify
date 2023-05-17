import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 90%;
    height: 90%;
    background-color: #b3b3b3;
    margin-top: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 90%;
    }

    &:hover {
        cursor: pointer;
    }
`;