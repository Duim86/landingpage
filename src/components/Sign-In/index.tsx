import React from 'react';

import { Link } from 'react-router-dom';

import googleButton from '../../assets/googleButton.svg'

import Input from '../../components/Input';

import Buttons from '../../components/buttons';


import './styles.css';




interface SignInProps {
    titleLine1:string,
    titleLine2: string;
    titleSpan: string;
};

const SignIn: React.FC<SignInProps> = (props) => {
    return (   
         <>
            <div className="title-box">
                <h1>{props.titleLine1}</h1>
                <h1>{props.titleLine2}<span>{props.titleSpan}</span></h1>
            </div>
            <div className="sign-in-content">
                <Link to="">
                    <img src={googleButton} alt=""/>
                </Link>
                <p>ou</p>
                <form>
                    <div className="form-snap-packer">
                        <Input placeholder="Digite seu e-mail"/>
                        <Buttons>
                            <span>Ser um Snap Packer</span>
                        </Buttons>
                    </div>
                </form>
            </div>
        </>

    )
};

export default SignIn;
