import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Custom from './Components/custom/Custom';
import Home from './Components/home/Home';
import Quick from './Components/quick/Quick';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/quick" exact component={Quick}></Route>
          <Route path="/custom" exact component={Custom}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
