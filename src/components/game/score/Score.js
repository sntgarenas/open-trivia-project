import React, { Component, Fragment, useContext, useEffect, useState } from 'react';
import GameContext from '../../../context/game/GameProvider';

const Score = ({numberQuestions}) => {
    const [{}, dispatch] = useContext(GameContext);
    const [score, setScore] = useState([]);



    const addScore = () => {
        for (let i = 0; i < numberQuestions; i++) {
            score.push(i+1);
        }
    }

    useEffect(() => {
        addScore();
    }, [numberQuestions]);


    return ( 
        <div className="box sidebar2">
            <div className="col-sm-10">
                {score.reverse().map((number, index) => {
                    return <p key={index}> {number} $ {number*1000} </p>
                })}
            </div>
        </div>
     );
}

export default Score;