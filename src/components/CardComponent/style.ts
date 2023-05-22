import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #202020;
    margin-top: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 8px 8px 0 0;
        gap: 10px;
    }

    &:hover {
        cursor: pointer;
    }

    h1 {
        font-size: 1.5rem;
        color: #fff;
        gap: 10px;
        padding: 0.5rem;
}
`;