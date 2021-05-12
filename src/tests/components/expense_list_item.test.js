import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

//create test file
test('should render expensive list item with expenses',()=>{
    const wrapper=shallow(<ExpenseListItem key={expenses[0].id} {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    })