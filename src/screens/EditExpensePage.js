import React, { Component } from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';


export class EditExpensePage extends Component{


    onRemove=()=>{
        this.props.removeExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }
    onSubmit=
        (expense)=>{
            this.props.editExpense(
               this.props.expense.id,
                expense
            )
            this.props.history.push('/');
        }
   

    render(){
        return( <div>
            <ExpenseForm 
            expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
             <button  onClick={this.onRemove}>Remove</button>
             </div>)
    }


}



    const mapStateToProps=(state,props)=>({
        expense:state.expenses.find((expense)=>
           expense.id ===props.match.params.id    )
    })

    

    const mapDispatchProps=(dispatch,props)=>({
      removeExpense:(data)=>dispatch(removeExpense(data)),
      editExpense:(id,expense)=>dispatch(editExpense(id,expense))
    })

export default connect(mapStateToProps, mapDispatchProps)(EditExpensePage);