import React, { Component, Fragment, useContext, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';

const NavBar = () => {
    const [{player, level, rewards}, dispatch] = useContext(GameContext);

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
                        Gain: $ { rewards }
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NavBar;