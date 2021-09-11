import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GameContext from '../../../context/game/GameProvider';
import { types } from '../../../context/game/GameReducer';

const Question = () => {
    const [{questions, correctQuestionCounter}, dispatch] = useContext(GameContext);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [currentOptions, setcurrentOptions] = useState([]);
    const [countDown, setCountDown] = useState(30);
    let history = useHistory();

    const sortOptionsQuestions = () => {
        const temporaryArray = [];

        questions[questionNumber].incorrect_answers.map(answ => temporaryArray.push(answ));
        temporaryArray.push(questions[questionNumber].correct_answer);
        setcurrentOptions(temporaryArray.sort());
    }

    const handleResponse = e => {
        if (e.target.innerHTML === questions[questionNumber].correct_answer) {
            dispatch({
                type: types.correctAnswer,
                payload: ((questionNumber+1)*1000)
            })
            
            setQuestionNumber((questionNumber+1));
        }
    }

    const handleBack = () => {
        dispatch({
            type: types.resetGameData
        })

        history.push("lobby");
    }

    useEffect(() => {
        if (questions.length > 0) {
            sortOptionsQuestions();
        }
    }, [questions, questionNumber]);


    return ( 
        <div className="box content">
            <div className="container">
                <div className="row">
                    <i class="fas fa-caret-square-left my-icon" onClick={handleBack}></i>
                </div>
                <div style={{textAlign: "center"}}>
                    {countDown}
                </div>
                <div style={{textAlign: "center"}}>
                    {questions[questionNumber]?.question}
                </div>

                <div className="row">
                    <div>
                        <div className="center row" style={{margin: "auto"}}>    
                            {currentOptions.map((question, index) => {
                                return <div className="col answer" key={index}>
                                            <button type="button"
                                                    onClick={handleResponse}
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