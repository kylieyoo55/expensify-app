import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate,setStartDate,setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component{

    state={
        calendarFocused:null
    }
    onSortChange=(e)=>{
        if(e.target.value ==='date'){
            this.props.sortByDate()
        }
        if(e.target.value ==='amount'){
        this.props.sortByAmount()
        }
        }

    onDateChange=({startDate,endDate})=>{
     this.props.setStartDate(startDate)
     this.props.setEndDate(endDate)
    }   

    onFocusChange=(calendarFocused)=>{
this.setState({calendarFocused})
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value)
    }
    

    render(){
            return(
                <div>
                    <input type='text' 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}/>
                    <select 
                    value={this.props.filters.sortBy}
                     onChange={this.onSortChange}>
                        <option value='date' >Date</option>
                        <option value='amount'>Amount</option>
                    </select>
                    <DateRangePicker 
                         startDate={this.props.filters.startDate}
                         endDate={this.props.filters.endDate}
                         onDatesChange={this.onDateChange}
                         focusedInput={this.state.calendarFocused}
                         onFocusChange={this.onFocusChange}
                         numberOfMonths={1}
                         isOutsideRange={()=>false}
                         showClearDates={true}
                         startDateId="sadajskhdqwkjehqweqw"
                         endDateId="sasssdajskhdqwkjehqweqw"
  
                    />
                </div>
            )

    }


        
           }


           
           
const mapStateToProps=(state)=>
 ( {
        filters:state.filters
    })


const mapDispatchProps=(dispatch)=>({
   setTextFilter:(text)=>dispatch(setTextFilter(text)),
   sortByDate:()=>dispatch(sortByDate()),
   sortByAmount:()=>dispatch(sortByAmount()),
   setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
   setEndDate:(endDate)=>dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchProps)(ExpenseListFilters);