import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
    <div>
        <h1>Expensify</h1>

        <NavLink to={'/'} activeClassName='is-active'>--HOME--</NavLink>
        <NavLink to={'/add'} activeClassName='is-active'>--ADD EXPENSE--</NavLink>
 
        <NavLink to={'/help'} activeClassName='is-active'>--HELP--</NavLink>
        
    </div>
)

export default Header;