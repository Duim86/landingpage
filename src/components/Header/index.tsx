import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

import './styles.css'


function Header() {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <img src={logo} alt="logoSnapPacking"></img>
                <div className="links-header">
                    <Link to="">Snap Packing</Link>
                    <Link to="">Ferramentas</Link>
                    <Link to="">Segurança</Link>
                    <Link to="">Contato</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;