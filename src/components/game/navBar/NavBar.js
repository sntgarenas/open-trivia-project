import React, { Component, Fragment, useContext, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';

const NavBar = () => {
    const [{player, level}, dispatch] = useContext(GameContext);

    return ( 
        <nav>
            <button>Back</button>
            <span>Jugador: {player}</span>
            <span>Nivel: {level}</span>
            <span>Ganancia: $0</span>
        </nav>
     );
}

export default NavBar;