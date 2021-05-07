import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <div>
        <h1>HEADER</h1>
        <NavLink to={'/'} activeClassName='is-active'>Home --</NavLink>
        <NavLink to={'/contact'} activeClassName='is-active'>Contact --</NavLink>
        <NavLink to={'/portfolio'} activeClassName='is-active'>Portfolio</NavLink>

        
    </div>
)

export default Header;