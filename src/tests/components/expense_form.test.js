import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixture/expenses';
import ExpenseForm from '../../components/ExpenseForm';

test('should render expense form corrently',()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render Expense form with expense',()=>{
 const wrapper=shallow(<ExpenseForm expense={expenses[0]} />);
 expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission',()=>{
    const wrapper=shallow(<ExpenseForm />);

    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change',()=>{
const value="this is new value"
const wrapper=shallow(<ExpenseForm />);
wrapper.find('input').at(0).simulate('change',{
 target:{value}
});
expect(wrapper.state('description')).toBe(value);
})



test('should set note on textarea change',()=>{
    const value='this is new text area field';
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
})

//set amount(15.20) valid
test('should render when pass valid amount',()=>{
    const value='25.50'
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

//set amount invalid(12.1222)
test('should render when pass invalid amount',()=>{
    const value='12.1222'
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('');

    
})

//submit spy
test('should call onSubmit prop for valid for submission',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createAt:expenses[0].createAt
    });

})

//pick the dates
test('should set new date on date change',()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);
})

//onFocused change->true
test('should set on focused change to true',()=>{
    const focused=true;
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toEqual(focused)
})