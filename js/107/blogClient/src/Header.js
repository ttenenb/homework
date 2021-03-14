import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>PCS MERN Blog</h1>
      <h2>Welcome to the Blog!</h2>
      <nav>
        <NavLink to="/">home</NavLink> | <NavLink to="/addPost">add post</NavLink>
      </nav>
    </header>
  )
}
