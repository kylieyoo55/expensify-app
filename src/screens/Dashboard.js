import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';



const Dashboard =()=>(
    <div>
    <h1>Dash Board</h1>
    <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default Dashboard;