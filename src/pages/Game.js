import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import getQuestions from '../apis/getTrivial';
import NavBar from '../components/game/NavBar';
import Question from '../components/game/Question';
import GameContext from '../context/game/GameProvider';
import { types } from '../context/game/GameReducer';

const Game = () => {
    const [{player, category, level}, dispatch] = useContext(GameContext);
    const [questions, setQuestions] = useState([]);
    let history = useHistory();

    useEffect(() => {
       if (player === 'No hay jugador') {
            history.push("lobby")
        } else {
            getQuestions(category, level).then(response => {
                setQuestions(response.results);

                dispatch({
                    type: types.startGame,
                    payload: response.results
                });
            });    
        }
    }, []);


    return (
        <Fragment>
            <NavBar />
            <Question />
        </Fragment>
    )
}

export default Game;

//<h2>{questions[0]?.correct_answer}</h2>