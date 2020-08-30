import React from 'react';

import backgroundGray from '../../assets/background-gray.png'

import { Container } from './styles';


interface BannerProps {
    title: string;
    text: string;
    img: string;
    side: boolean
}


const Banner: React.FC<BannerProps> = (props) => {
    return (  
        <>
            <Container changeSide={props.side}>
                    <div className="background-gray">            
                        <img src={backgroundGray} alt="Fundo cinza"/>   
                    </div>
                    <div className="image">
                        <img src={props.img} alt="Banner principal"/>
                    </div>
                    <div className="text-banner">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </div>
            
            </Container>
            
        </>
    )
};

export default Banner;
