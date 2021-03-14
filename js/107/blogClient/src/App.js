import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Posts from './Posts';
import AddPost from './AddPost';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Posts />
        </Route>
        <Route path="/addPost">
          <AddPost />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
