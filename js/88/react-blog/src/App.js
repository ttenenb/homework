import { Route, Switch, Redirect } from 'react-router-dom';
import BlogList from './BlogList';
import GetPost from './GetPost';
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/bloglist'>
          <BlogList />
        </Route>
        <Route path='/post/:id'>
          <GetPost />
        </Route>
        <Redirect to='/bloglist' />
      </Switch>
    </div>
  );
}

export default App;
