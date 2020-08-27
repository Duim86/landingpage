import React from 'react';


import Header from '../../components/Header';
import SignIn from '../../components/Sign-In';

import Banner1 from '../../components/Banner1';
import Banner2 from '../../components/Banner2';

import Circles from '../../components/Circles';

import Footer from '../../components/Footer';

import travelGroup from '../../assets/travelGroup.png';
import newPeople from '../../assets/newPeople.png';
import explorerRoutes from '../../assets/explorerRoutes.png';
import newRoutes from '../../assets/newRoutes.png';

import bannerResources from '../../assets/bannerResources.png';
import snapPacker from '../../assets/snapPacker.png';

import './styles.css';



function Landing(){
    return (
        <div id="landing-page" className="container">
            <Header />
            <main>

                <SignIn titleLine1='A plataforma que vai' titleLine2=' '  titleSpan='mudar a sua forma de viajar.'/>

                <Banner1
                title='Recursos'
                text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'   
                img={bannerResources}

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
                <div className="container-banner">
                    <Banner2
                    title='Como Funciona'
                    text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'    
                    img={bannerResources}           
                    >                    
                    </Banner2>

                    <Banner1
                    title='Segurança'
                    text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.' 
                    img={bannerResources}            
                    >                    
                    </Banner1>

                    <Banner2
                    title='Snap Packers'
                    text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'      
                    img={snapPacker}          
                    >                    
                    </Banner2>
                </div>

                <div className="last-sign-in">
                    <SignIn titleLine1='A iniciativa que faltava ' titleLine2='para você ' titleSpan='viajar.'/>
                </div>



            </main>  
            <footer>
                <Footer />
            </footer>

        </div>


    )
}

export default Landing;