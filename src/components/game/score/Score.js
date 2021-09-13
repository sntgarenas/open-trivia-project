import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';

const Score = ({numberQuestions}) => {
    const [{questionNumber}, dispatch] = useContext(GameContext);
    const [score, setScore] = useState([]);

    const addScore = () => {
        const temporaryArray = []

        for (let i = 0; i < numberQuestions; i++) {
            temporaryArray.push(i+1);
        }
        setScore(temporaryArray.reverse());
    }

    console.log(score.reverse());

    useEffect(() => {
        addScore();
    }, [numberQuestions]);


    return ( 
        <div className="box sidebar2">
            <div className="col-sm-10">
                {score.map((number, index) => {
                    return <p key={index} 
                              className={number === (questionNumber+1) ? 'success' : '' } 
                            > {number} $ {number*1000} </p>
                })}
            </div>
        </div>
     );
}

export default Score;