import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import '../selectors/expenses';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList=(props)=>(
    <div>
       <h1>Expense List</h1> 
       {
           props.expenses.length ===0?(
            <p>No Expenses</p>
           ):(
            props.expenses.map((exp)=>{
          return <ExpenseListItem key={exp.id} {...exp} />
       })
           )
       }

    </div>
)


const mapStateToProps=(state)=>{
    return{
        expenses: getVisibleExpenses(state.expenses,state.filters)
     }
}
export default connect(mapStateToProps)(ExpenseList);

