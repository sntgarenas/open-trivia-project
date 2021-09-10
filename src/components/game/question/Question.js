import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';
import { types } from '../../../context/game/GameReducer';

const Question = () => {
    const [{questions, correctQuestionCounter}, dispatch] = useContext(GameContext);
    const [questionCount, setQuestionCount] = useState(0);
    const [currentOptions, setcurrentOptions] = useState([]);

    const sortOptionsQuestions = () => {
        const temporaryArray = [];

        questions[questionCount].incorrect_answers.map(answ => temporaryArray.push(answ));
        temporaryArray.push(questions[questionCount].correct_answer);
        setcurrentOptions(temporaryArray.sort())
    }

    const handleOptions = () => {
        dispatch({
            action: types.correctAnswer,
            payload: (correctQuestionCounter+1)
        })
    }

    useEffect(() => {
        if (questions.length > 0) {
            sortOptionsQuestions();
        }
    }, [questions, questionCount]);

    return ( 
        <div className="container-question">
            <h2>{questions[questionCount]?.question}</h2>
            <h5>1 {currentOptions[0]}</h5>
            <h5>2 {currentOptions[1]}</h5>
            <h5>3 {currentOptions[2]}</h5>
            <h5>4 {currentOptions[3]}</h5>
        </div>
     );
}

export default Question;