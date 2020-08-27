import React from 'react';

import './styles.css'


interface CirclesProps {
    title: string;
    text: string;
    img: string
}

const Circles: React.FC<CirclesProps> = (props) => {
    return (   
        <div className="circles">
            <img src={props.img} alt={props.title}/>
            <div className="text-circle">
                <p>{props.text}</p>
            </div>

        </div>

    )
};

export default Circles;