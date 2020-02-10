import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginContainer from './component/AU/LoginContainer'
import ListTaskConteiner from './component/ListTask/ListTaskConteiner'

const App = (props) => {
     return (
      <div className="app-wraper">
        <Route path='/login' render={() => <LoginContainer />} />
        <Route path='/task' render={() => <ListTaskConteiner />} />
      </div>
        )
    }

export default App;
