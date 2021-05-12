import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';
//react-test-renderer
//should render Header correctly

test('should render Header correctly',()=>{
const wrapper=shallow(<Header />);
expect(toJSON(wrapper)).toMatchSnapshot();
// expect(wrapper.find('h1').text()).toBe('Expensify');
})

