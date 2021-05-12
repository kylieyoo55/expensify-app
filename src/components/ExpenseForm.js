import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/initialize';


const now=moment().format('MMM Do, YYYY');
console.log(now);

class ExpenseForm extends Component{
    constructor(props){
        super(props);
// console.log(props)
        this.state={ 
        description:props.expense?props.expense.description:'',
        note:props.expense?props.expense.note:'',
        amount:props.expense?(props.expense.amount/100).toString():'',
        createAt:props.expense?moment(props.expense.createAt):moment(),
        calendarFocused:false,
        error:''

        }
    }

    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
        ;
    }

    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}))
        }
    


    onAmountChange=(e)=>{
const amount=e.target.value;
if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
    this.setState(()=>({amount}))
}

    }

    onDateChange=(createAt)=>{
        if(createAt){
            this.setState({createAt});
        }

    }

    onFocusChange=({focused})=>{
this.setState({calendarFocused: focused})
    }

    onSubmit=(e)=>{
e.preventDefault();
if(!this.state.description || !this.state.amount ){
    this.setState({error:'Please provide descriptopn and amount'})

}else{
    this.setState({error:''});
    this.props.onSubmit({
        description:this.state.description,
        note:this.state.note,
        amount:parseFloat(this.state.amount,10)*100,
        createAt:this.state.createAt.valueOf(),
    })

}
    }

    render(){
       
        return(
            <div>
            {this.state.error&&<p>{this.state.error}</p>}
            
            <form onSubmit={this.onSubmit}>
                <input
                type='text' 
                placeholder='description'
                value={this.state.description}
                onChange={this.onDescriptionChange}
                autoFocus
                 />
                 <input 
                     type='text'
                     placeholder='amount'
                     value={this.state.amount}
                     onChange={this.onAmountChange}
                     autoFocus
                 />
                 <SingleDatePicker 
                     date={this.state.createAt}
                     onDateChange={this.onDateChange}
                     focused={this.state.calendarFocused}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     isOutsideRange={()=>false}

                 />

                 <textarea
                 placeholder="add a note for your expense"
                 value={this.state.note}
                 onChange={this.onNoteChange}
                 autoFocus
                 >

                 </textarea>

             <button>Add Expense</button>
            </form>
           
            </div>
        )
    }
}

export default ExpenseForm;