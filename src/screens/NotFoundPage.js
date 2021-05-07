import React from 'react';
import { NavLink} from 'react-router-dom';

const NotFoundPage = ()=>(
    <div>
        404 <NavLink to='/'>GO HOME</NavLink>
    </div>
)

export default NotFoundPage;