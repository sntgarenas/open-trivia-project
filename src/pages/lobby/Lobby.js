import React, { Component, Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import GameContext from '../../context/game/GameProvider';
import { types } from '../../context/game/GameReducer';
import  './Lobby.css';


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
        <div className="center">
            <form
                onSubmit={handleSubmit}
            >
                <div className="form-group mb-3">
                    <label htmlFor="userInput" className="form-label">User</label>
                    <input type="text" 
                           className="form-control" 
                           id="userInput"
                           name="player" 
                           onChange={handleChange}
                           required />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label">Category</label>
                    <select className="form-control col-sm-10" 
                            id="exampleFormControlSelect1" 
                            name="category" 
                            onChange={handleChange} 
                            required
                    >
                        
                        <option value="9">Cultura general</option>
                        <option value="10">Libros</option>
                        <option value="11">Filmers</option>
                        <option value="12">Musica</option>
                        <option value="17">Ciencia y naturaleza</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2" className="col-sm-2 col-form-label">Dificulty</label>
                    <select className="form-control col-sm-10" 
                            id="exampleFormControlSelect2"
                            name="level"
                            onChange={handleChange} 
                            required
                    >
                        
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                
                <div className="centerbutton">
                    <button type="submit" className="btn btn-primary btn-lg center2">Log in</button>
                </div>
                
            </form>
        </div>
    )
}

export default Lobby;



/*<Fragment>
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
        </Fragment>*/