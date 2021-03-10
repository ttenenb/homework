import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import BlogList from './BlogList';
import Header from './Header';
import Blog from './Blog';
import Test from './AddPost';

function App() {
  const [selectedBlog, setSelectedBlog] = useState();

  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Switch>
        <Route path="/blogs">
          <BlogList handleBlogSelected={setSelectedBlog} />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/blog">
          {selectedBlog && <Blog blog={selectedBlog} />}
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
