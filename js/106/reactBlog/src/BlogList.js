import './BlogList.css';
import React, { Component } from 'react'
import BlogInfo from './BlogInfo';

export default class BlogList extends Component {
  state = {
    blogs: [],
    loading: false
  };

  async componentDidMount() {

    try {
      this.setState({loading: true, error: null});
      const response = await fetch('http://localhost');

      if (!response.ok) {
        console.log(response);
        throw new Error(`${response.status} - ${response.statusText || 'OOPS'}`);
      }

      const blogs = await response.json();

      this.setState({
        blogs: blogs
      });
      
    } catch (err) {
      console.error(err);
      this.setState({
        error: err
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
     const {loading, error, blogs } = this.state;

    if (loading) {
      return <h1>loading....</h1>
    }

    if (error) {
      return <h1 style={{ color: 'red', 'text-align': 'center' }}>{error.message}</h1>
    }

    return (
      <div>
        {blogs.map(blog => <BlogInfo key={blog._id} blog={blog}/>)}
      </div>
    )
  }
}
