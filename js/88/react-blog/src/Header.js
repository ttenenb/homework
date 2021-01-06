import React from 'react';
import { NavLink} from 'react-router-dom';
function Header(props) {
    return (
        <header className='header'>
            <NavLink to='/bloglist'>Blog List</NavLink> | <NavLink to='/signup'>Sign Up</NavLink>
        </header>
    );
}

export default Header;