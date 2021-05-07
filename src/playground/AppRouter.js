import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Dashboard from '../playground/Dashboard';
import Portfolio from '../playground/Portfolio';
import Contact from '../playground/Contact';
import PortfolioId from './Portfolio-id';
import Header from './Header';

const AppRouter=()=>(

<BrowserRouter >

<div>
<Header/>
<Switch>

<Route path='/' component={Dashboard} exact={true} />
<Route path='/contact' component={Contact}  />
<Route path='/portfolio' component={Portfolio} exact={true} />
<Route path='/portfolio-id/:id' component={PortfolioId} />

</Switch>
</div>
</BrowserRouter>

)

export default AppRouter;