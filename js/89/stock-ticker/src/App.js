import './App.css';
import Companies from './Companies';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GetAllDetails from './GetAllDetails';

function App() {
  return (
    <>
      <h1 className="App">PCS Stock Ticker</h1>
      <br />
    
      <BrowserRouter>
        <Companies />
        <Switch>

          <Route path='/:ticker'>
            <GetAllDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
