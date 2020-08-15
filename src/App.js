// @flow

import React from 'react';
import './App.css';
import Home from './pages/home'
import 'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Heroes from "./pages/heroes";
import Menu from './pages/menu'
import TeamOptimizer from "./pages/team_optimizer";

function App() {
    return (
        <Router>
            <div className="App">
                <Menu>
                    <Switch>
                        <Route path="/heroes">
                            <Heroes/>
                        </Route>
                        <Route path="/teams">
                            <TeamOptimizer/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Menu>
            </div>
        </Router>
    );
}

export default App;
