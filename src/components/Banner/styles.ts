import styled, { css } from 'styled-components';

interface ContainerProps {
  changeSide: boolean;
}

export const Container = styled.div<ContainerProps>`
    
    position: relative;
    width: 100%;
    margin-top: 5.4rem;
    text-align: right;
    height: 81.1rem;
    z-index: -1;


 h2 {
    font: 700 6rem LeagueSpartan;
    line-height: 8rem;
    margin-bottom: 1.6rem;
    width: 40rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: var(--color-orange);
 }

p {
    width: 40rem;
    font: 400 3rem Lato;    
    line-height: 4rem;  
    letter-spacing: 0.05em;
    color: var(--color-blue);
}


.background-gray img{   
    height: 67.5rem;
    width: 120.9rem;
}

.background-gray{
    position: absolute;
    bottom: 0;
}

.image {
    position: absolute;
    left: 7.5rem;
}

.text-banner{
    position: absolute;
    right: 7.5rem;
    top: 18.5rem
}
${props =>
    props.changeSide &&
    css`
        p {
            text-align: left;
        }
        h2 {
            color: var(--color-blue)
        }

        .background-gray{
        position: absolute;
        bottom: 0;
        right: 0;
        transform: rotate(-180deg);
    }

        .image {
        position: absolute;
        right: 7.5rem;
    }

        .text-banner{
        position: absolute;
        left: 7.5rem;
        top: 18.5rem
}
    `}

`;
