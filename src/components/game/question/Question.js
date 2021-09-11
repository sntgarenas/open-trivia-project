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
        setcurrentOptions(temporaryArray.sort());
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
        <div className="box content">
            <div className="container">
                <div className="row">
                    Imagen
                </div>
                <div style={{textAlign: "center"}}>
                    30
                </div>
                <div style={{textAlign: "center"}}>
                    {questions[questionCount]?.question}
                </div>

                <div className="row">
                    <div>
                        <div className="center row" style={{margin: "auto"}}>    
                            {currentOptions.map((question, index) => {
                                return <div className="col answer" key={index}>
                                        <button type="submit" 
                                                className="btn btn-outline-primary btn-lg center2"
                                        >
                                            {question}
                                        </button>
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Question;