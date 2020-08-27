import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

import './styles.css'


function Footer() {
    return (
        <>
            <div className="footer-container">
                <img src={logo} alt="logoSnapPacking"></img>
                <div className="links-header">
                    <Link to="">Termos de Uso</Link>
                    <Link to="">Nosso Time</Link>
                    <Link to="">Contato</Link>
                    <Link to="">Faq</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;