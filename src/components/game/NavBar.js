import React, { Component, Fragment, useContext, useState } from 'react';
import GameContext from '../../context/game/GameProvider';

const NavBar = () => {
    const [{player, level}, dispatch] = useContext(GameContext);

    return ( 
        <nav>
            <h2>Jugador: {player}</h2>
            <h2>Nivel: {level}</h2>
            <h2>Ganancia: $0</h2>
        </nav>
     );
}

export default NavBar;