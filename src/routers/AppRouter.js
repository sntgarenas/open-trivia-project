import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from '../pages/game/Game';
import Lobby from '../pages/lobby/Lobby';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';


const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path="/lobby" component={Lobby} />
                <Route exact path="/" component={Lobby} />
                <Route exact path="/game" component={Game} />
                <Route exact path="*" component={NotFoundPage} />
            </Switch>
        </Router>
     );
}

export default AppRouter;