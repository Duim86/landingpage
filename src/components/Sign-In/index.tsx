import React, { useState, SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';

import googleButton from '../../assets/googleButton.png'

import Input from '../../components/Input';

import Buttons from '../../components/buttons';
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
            alert("E-mail cadastrado");
        } catch (error) {
            alert("Você já está fazendo parte da lista de espera!")
        }
    }
    return (
        <>
            <div className="title-box">
                <h1>{props.titleLine1}</h1>
                <h1>{props.titleLine2}<span>{props.titleSpan}</span></h1>
            </div>
            <div className="sign-in-content">
                <Link to="">
                    <img src={googleButton} alt="" />
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
        </>

    )
};

export default SignIn;
