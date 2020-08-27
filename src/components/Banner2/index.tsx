import React from 'react';

import bannerResources from '../../assets/bannerResources.svg'

import './styles.css'


interface Banner2Props {
    title: string;
    text: string
}

const Banner2: React.FC<Banner2Props> = (props) => {
    return (   
        <div className="banner2">
            <img src={bannerResources} alt="Banner principal"/>
            <div className="text-banner">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>

        </div>

    )
};

export default Banner2;