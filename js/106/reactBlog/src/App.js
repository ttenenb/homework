import './App.css';
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import BlogList from './BlogList';
import Header from './Header';
import AddComment from './AddComment';
import AddPost from './AddPost';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Switch>
        <Route path="/blogs">
          <BlogList />
        </Route>
        <Route path="/addPost">
          <AddPost />
        </Route>
        <Route path="/addComment/:postId">
          <AddComment />
        </Route>
        <Redirect from="/" to="/blogs" exact />
        <Route render={() => {
          return (<div className="fourOhFour">
            <h1>Page not found</h1>
            <Link to="/blogs">go home</Link>
          </div>)
        }} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
