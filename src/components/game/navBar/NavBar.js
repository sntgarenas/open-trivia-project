import React, { Component, Fragment, useContext, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';

const NavBar = () => {
    const [{player, level}, dispatch] = useContext(GameContext);

    return ( 
        <div className="box header">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        player: {player}
                    </div>
                    <div className="col-4">
                        Level: {level}
                    </div>
                    <div className="col-4">
                        Gain: $ 0
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NavBar;