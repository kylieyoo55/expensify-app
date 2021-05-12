import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../screens/NotFoundPage'
import toJSON from 'enzyme-to-json';

test('should render not found correctly',()=>{
    const wrapper=shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})