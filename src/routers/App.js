import React from 'react';
import {BrowserRouter,  Route, Switch } from 'react-router-dom';
import AddExpensePAge from '../screens/AddExpensePage';
import EditExpensePage from '../screens/EditExpensePage';

import Header from '../components/Header';
import Help from '../screens/HelpPage';
import NotFountPage from '../screens/NotFoundPage';
import Dashboard from '../screens/Dashboard';
import 'react-dates/lib/css/_datepicker.css';


 const App=()=> 
 (
  <BrowserRouter>
  <div>
  <Header/>
    <Switch>
      <Route path='/' component={Dashboard} exact={true}/>
      <Route path='/edit/:id' component={EditExpensePage} />
      <Route path='/help' component={Help} />
    
      <Route path='/add' component={AddExpensePAge} />
      <Route  component={NotFountPage} />

    </Switch>
    </div>
  </BrowserRouter>
  );


export default App;
