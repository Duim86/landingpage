import React from 'react';


import Header from '../../components/Header';
import SignIn from '../../components/Sign-In';

import Banner from '../../components/Banner';


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

                <Banner side={true}
                title='RECURSOS'
                text='A Snap Packing é a plataforma que facilita encontrar viagens e grupos de forma prática.'   
                img={bannerResources}

                >                    
                </Banner>
                
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
                    <Banner side={false}
                    title='COMO FUNCIONA'
                    text= 'Sed sagittis lacus sed arcu ullamcorper, vitae luctus mi scelerisque. Fusce bibendum, est eget cursus rutrum, justo mauris porta tortor, placerat venenatis dui orci vel diam. Integer eget '  
                    img={bannerResources}           
                    >                    
                    </Banner>

                    <Banner side={true}
                    title='SEGURANÇA'
                    text='Aenean semper malesuada augue et egestas. In porta risus diam, eget faucibus libero sagittis eu. Sed quis lectus in odio elementum viverra. Integer ac tortor id risus cursus mattis sed sit amet nunc. Morbi metus arcu.' 
                    img={bannerResources}            
                    >                    
                    </Banner>

                    <Banner side={false}
                    title='SNAP PACKERS'
                    text='Vestibulum blandit et nisi viverra facilisis. Ut tempor tellus feugiat accumsa lobortis. Suspendisse potenti. Pellentesque dignissim dolor magna..'      
                    img={snapPacker}          
                    >                    
                    </Banner>
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