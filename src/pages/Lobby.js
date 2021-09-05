import React, { Component, Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import GameContext from '../context/game/GameProvider';
import { types } from '../context/game/GameReducer';

const Lobby = () => {
    const [{player, category, level}, dispatch] = useContext(GameContext);
    const [match, setMatch] = useState({
        player: '',
        category: 'nature',
        level: 'Easy'
    });
    let history = useHistory();

    const handleChange = e => {
        setMatch({
            ...match,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if (match.player === '' || match.category === '' || match.level === '') {
            alert('Please fill all form fields')
        } else {
            dispatch({
                type: types.register,
                payload: match
            });

            history.push("game");
        }
    }

    return (
        <Fragment>
            <form 
                onSubmit={handleSubmit}
            >
                <input type="text" name="player" onChange={handleChange}/>

                <select name="category" onChange={handleChange} >
                    <option value="21">sports</option>
                    <option value="9">nature</option>
                </select>

                
                <select name="level" onChange={handleChange}>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>

                <input 
                    type="submit" 
                />
            </form>

            <h1>JUGADOR: {player}</h1>
            <h1>CATEGORIA: {category}</h1>
            <h1>NIVEL: {level}</h1>
        </Fragment>
    )
}

export default Lobby;