import React, { Component, Fragment, useContext, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';

const Option = () => {
    const [{player, level}, dispatch] = useContext(GameContext);

    return ( 
        <div class="row">
            
        </div>
     );
}

export default Option;