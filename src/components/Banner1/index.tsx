import React from 'react';

import './styles.css'


interface Banner1Props {
    title: string;
    text: string;
    img: string
}

const Banner1: React.FC<Banner1Props> = (props) => {
    return (   
        <div className="banner1">
            <div className="text-banner">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <img src={props.img} alt="Banner principal"/>
        </div>

    )
};

export default Banner1;