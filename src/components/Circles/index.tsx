import React from 'react';

import travelGroup from '../../assets/travelGroup.png';
import newPeople from '../../assets/newPeople.png';
import explorerRoutes from '../../assets/explorerRoutes.png';
import newRoutes from '../../assets/newRoutes.png';

import { Container } from './styles';


export default function Circles() {
    return (  
        <Container> 
            <div className="circles">
                <img src={travelGroup} alt="Viagem em grupo"/>
                <p>Crie e participe de grupos de viagens</p>
            </div>
            <div className="circles">
                <img src={newPeople} alt="Viagem em grupo"/>
                <p>Conheça Novas Pessoas</p>
            </div>
            <div className="circles">
                <img src={explorerRoutes} alt="Viagem em grupo"/>
                <p>Explore Roteiros Prontos</p>
            </div>
            <div className="circles">
                <img src={newRoutes} alt="Viagem em grupo"/>
                <p>Crie Roteiros Compartilhados</p>
            </div>
        </Container> 

    )
}

