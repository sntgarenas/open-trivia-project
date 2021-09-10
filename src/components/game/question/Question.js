import React, { Component, Fragment, useContext, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';
import { types } from '../../../context/game/GameReducer';

const Question = () => {
    const [{questions, correctQuestionCounter}, dispatch] = useContext(GameContext);

    const handleOptions = () => {
        dispatch({
            action: types.correctAnswer,
            payload: (correctQuestionCounter+1)
        })
    }

    return ( 
        <div className="container-question">
            <h1>{questions[0]?.question}</h1>
            <h5>{questions[0]?.incorrect_answers[0]}</h5>
            <h5>{questions[0]?.incorrect_answers[1]}</h5>
            <h5>{questions[0]?.incorrect_answers[2]}</h5>
        </div>
     );
}

export default Question;