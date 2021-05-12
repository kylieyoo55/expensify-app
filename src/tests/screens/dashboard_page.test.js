import React from 'react';
import {shallow} from 'enzyme';
import DashBoard from '../../screens/Dashboard'
import toJSON from 'enzyme-to-json';

test('should render dashboard page correctly',()=>{
    const wrapper=shallow(<DashBoard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})