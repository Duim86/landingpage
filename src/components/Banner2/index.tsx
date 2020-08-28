import React from 'react';

import backgroundGray from '../../assets/background-gray.png'

import './styles.css'


interface Banner2Props {
    title: string;
    text: string;
    img: string
}

const Banner2: React.FC<Banner2Props> = (props) => {
    return (   
        <div className="banner2">
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
        
        </div>
        
        )
    };
    
    export default Banner2;