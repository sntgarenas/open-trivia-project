import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import getQuestions from '../../apis/getTrivial';
import NavBar from '../../components/game/navBar/NavBar';
import Question from '../../components/game/question/Question';
import Score from './../../components/game/score/Score';
import GameContext from '../../context/game/GameProvider';
import { types } from '../../context/game/GameReducer';
import './Game.css';

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
        <div className="wrapper">
            <NavBar />

            {questions.length > 0
                ? <Question />
                : <p>Loading...</p>
            }

            <Score numberQuestions={questions.length} />
        </div>
    )
}

export default Game;