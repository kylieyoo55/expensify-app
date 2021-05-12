import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseListFilters} from '../../components/ExpenseListFilters'
// import expenses from '../fixture/expenses';
import {filters,altFilters} from '../fixture/filters';
import moment from 'moment';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter=jest.fn(),
    sortByDate=jest.fn(),
    sortByAmount=jest.fn(),
    setStartDate=jest.fn(),
    setEndDate=jest.fn(),
    wrapper=shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
})

test('should render ExpenseListFilters correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with altData correctly',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

//should handle test change

test('should handle text change',()=>{
    const value='goods'
    wrapper.find('input').simulate('change',{
        target:{ value }
    });
expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

//should sortby date,amount
test('should sortby date' ,()=>{
    wrapper.setProps({
        filters:altFilters
    })
    const value='date'
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByDate).toHaveBeenCalled();
})
test('should sortby amount' ,()=>{
    const value='amount'
    wrapper.find('select').simulate('change',{
        target:{value}
    });
    expect(sortByAmount).toHaveBeenCalled();
})
//should handle date changes
test('should handle date changes' ,()=>{
    const startDate=moment(0).add(4,'days');
    const endDate=moment(0).add(8,'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})
//should handle date focus change
test( 'should handle date focus change',()=>{
    const calendarFocused ='endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})