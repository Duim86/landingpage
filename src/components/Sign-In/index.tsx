import React, { useState, SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';

import googleButton from '../../assets/googleButton.png'

import Input from '../../components/Input';

import Buttons from '../../components/Buttons'
import api from '../../services/api';


import './styles.css';




interface SignInProps {
    titleLine1: string,
    titleLine2: string;
    titleSpan: string;
};

const SignIn: React.FC<SignInProps> = (props) => {
    const [email, setEmail] = useState('');
    async function handleAddLead(e: SyntheticEvent) {
        e.preventDefault();
        const data = {
            email
        };
        try {
            await api.post('email', data);
            setEmail('');
            alert("E-mail cadastrado");
        } catch (error) {
            setEmail('');
            alert("Você já está fazendo parte da lista de espera!")
        }
        
    }
    async function handleAddLeadGoogle(e: SyntheticEvent){
        e.preventDefault();
        try {
            const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
            const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

            const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
            const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;

            const systemZoom = width / window.screen.availWidth;
            const left = (width - 548) / 2 / systemZoom + dualScreenLeft
            const top = (height - 500) / 2 / systemZoom + dualScreenTop
 
            window.open('http://snappacking.appspot.com/google', '_blank', 'toolbar=no,scrollbars=no,resizable=yes, left='+ left +', top='+ top +', width=548/systemZoom, height=500/systemZoom');
        
            window.alert("E-mail cadastrado com o Google");
        }catch (error) {
            alert("Você já está fazendo parte da lista de espera!")
        }
    }
    return (
        <div className="sign-in-box">
            <div className="title-box">
                <h1>{props.titleLine1}</h1>
                <h1>{props.titleLine2}<span>{props.titleSpan}</span></h1>
            </div>
            <div className="sign-in-content">
                <Link to="">
                    <img src={googleButton} alt="" onClick={handleAddLeadGoogle} />
                </Link>
                <p>ou</p>
                <form onSubmit={handleAddLead}>
                    <div className="form-snap-packer">
                        <Input placeholder="Digite seu e-mail" value={email} onChange={e=>setEmail(e.target.value)} />
                        <Buttons>
                            <span>Ser um Snap Packer</span>
                        </Buttons>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default SignIn;
