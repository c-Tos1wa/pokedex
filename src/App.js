import './App.css';
import CardList from './components/cardList'
import Info from './components/info'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={CardList} />
            <Route path='/sobre/:id' component={Info} />
          </Switch>
        </BrowserRouter>
      </div>
      );
    }
}

export default App;
