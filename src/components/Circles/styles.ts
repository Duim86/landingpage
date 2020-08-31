import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7.5rem;
    margin-top: -7.3rem;



    .circles {
        width: 100%;
        max-width: 24.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        width: 100%;
        font-size: 3rem;
        font-weight: 600;
        font-family: Lato;
        line-height: 4rem;
        color: var(--color-blue-dark);
        text-align: center;
    }

    img {
        width: 100%;
        flex-shrink: 1;
    }

`