import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GameContext from '../../../context/game/GameProvider';
import { types } from '../../../context/game/GameReducer';

const Question = () => {
    const [{questions, questionNumber}, dispatch] = useContext(GameContext);
    const [currentOptions, setcurrentOptions] = useState([]);
    const [selectedButton, setSelectedButton] = useState(false);
    const [countDown, setCountDown] = useState(30);
    const [isWinner, setIsWinner] = useState(false);
    const [isLoser, setIsLoser] = useState(false);
    let history = useHistory();

    const sortOptionsQuestions = () => {
        let temporaryArray = [];

        questions[questionNumber].incorrect_answers.map(answ => temporaryArray.push(answ));
        temporaryArray.push(questions[questionNumber].correct_answer);
        temporaryArray = temporaryArray.sort();
        temporaryArray = temporaryArray.map(answ => ({answ}))
        
        setcurrentOptions(temporaryArray);
    }

    const handleResponse = (e, index) => {
        const options = [...currentOptions];

        if (questionNumber === questions.length - 1) {
            setIsWinner(true);

            dispatch({
                type: types.winGame,
                payload: ((questionNumber+1)*1000)
            });

            return;
        }

        if (e.target.innerHTML === questions[questionNumber].correct_answer) {
            options[index].success = true;

            setTimeout(() => {
                dispatch({
                    type: types.correctAnswer,
                    payload: ((questionNumber+1)*1000)
                })
                
                setSelectedButton(false);
                setCountDown(30);
            }, 5000);
        } else {
            options[index].failed = true;
            setCountDown(0);
            setIsLoser(true);
        }

        setSelectedButton(true);
        setcurrentOptions(options);
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

    useEffect(() => {
        if (!countDown || selectedButton) {
            setSelectedButton(true);
            return;
        }

        const interval = setInterval(() => {
            setCountDown(countDown-1);
        }, 1000);

        return () => clearInterval(interval);
    }, [countDown]);


    return ( 
        <div className="box content">
            <div className="container">
                <div className="row">
                    <i className="fas fa-caret-square-left my-icon" onClick={handleBack}></i>
                </div>
                
                {!isWinner
                   ? <Fragment>
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
                                                            onClick={(e) =>  handleResponse(e, index)}
                                                            className={`btn btn-outline-primary btn-lg center2 
                                                                        ${question.failed ? 'failed' : ''}
                                                                        ${question.success ? 'success' : ''}`
                                                                    }
                                                            disabled={selectedButton}
                                                    >
                                                        {question.answ}
                                                    </button>
                                                </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </Fragment>

                    : <div className="row"> 
                        <h2 style={{color: "green", textAlign: "center"}}>¡Ganastes!</h2>
                    </div>
                }

                {isLoser
                    ? <h2 style={{color: "red", textAlign: "center"}}>¡Perdistes!</h2>
                    : null
                }
            </div>
        </div>
     );
}

export default Question;