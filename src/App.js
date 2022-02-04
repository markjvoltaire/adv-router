import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Character from './views/Character';
import Home from './components/Home';
import Characters from './views/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <br />
        <br />
        <NavLink to="/Characters">Characters</NavLink>
        <Switch>
          <Route exact path="/characters" component={Characters} />
          {/* <Route exact path="/Characters/:char_id" component={Character} /> */}
          <Route exact path="/Characters/:char_id">
            <Character />
          </Route>
        </Switch>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
