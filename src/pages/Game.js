import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import getQuestions from '../apis/getTrivial';
import GameContext from '../context/game/GameProvider';
import { types } from '../context/game/GameReducer';

const Game = () => {
    const [{player, category, level}, dispatch] = useContext(GameContext);
    const [questions, setQuestions] = useState();
    let history = useHistory();
    let s;

    useEffect(() => {
        if (player === 'No hay jugador') {
            history.push("lobby")
        } else {
            //getQuestions(category, level).then(response => {setQuestions(response) });

            getQuestions(category, level).then(response => {setQuestions(response)});
            console.log("***" + questions);


            
            //console.log("usestate: " + s);
            /*dispatch({
                type: types.startGame,
                payload: questions
            })*/
        }
    }, []);

    return (
        <Fragment>
            <h1>Game:</h1>
        </Fragment>
    )
}

export default Game;