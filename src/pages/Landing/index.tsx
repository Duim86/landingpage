import React from 'react';


import Header from '../../components/Header';
import SignIn from '../../components/Sign-In';

import Banner1 from '../../components/Banner1';
import Banner2 from '../../components/Banner2';

import Circles from '../../components/Circles';

import Footer from '../../components/Footer';

import travelGroup from '../../assets/travelGroup.svg'
import newPeople from '../../assets/newPeople.svg'
import explorerRoutes from '../../assets/explorerRoutes.svg'
import newRoutes from '../../assets/newRoutes.svg'

import './styles.css'



function Landing(){

    return (
        <div id="landing-page" className="container">
            <Header />
            <main>

                <SignIn titleLine1='A plataforma que vai' titleLine2=' '  titleSpan='mudar a sua forma de viajar.'/>

                <Banner1
                title='Recursos'
                text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'               
                >                    
                </Banner1>
                
                <div className="circles-container"> 
                    <Circles 
                        title='Viagem em grupo' 
                        text='Crie e participe de grupos de viagens'
                        img={travelGroup}
                    />

                    <Circles 
                        title='Viagem em grupo' 
                        text='Conheça Novas Pessoas'
                        img={newPeople}
                    />
                    <Circles 
                        title='Viagem em grupo' 
                        text='Explore Roteiros Prontos'
                        img={explorerRoutes}
                    />
                    <Circles 
                        title='Viagem em grupo' 
                        text='Crie Roteiros Compartilhados'
                        img={newRoutes}
                    />
                </div>  

                <Banner2
                title='Como Funciona'
                text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'               
                >                    
                </Banner2>

                <Banner1
                title='Segurança'
                text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'             
                >                    
                </Banner1>

                <Banner2
                title='SnapPackers'
                text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'                
                >                    
                </Banner2>

                <SignIn titleLine1='A iniciativa que faltava ' titleLine2='pra você ' titleSpan='viajar.'/>



            </main>  
            <footer>
                <Footer />
            </footer>

        </div>


    )
}

export default Landing;