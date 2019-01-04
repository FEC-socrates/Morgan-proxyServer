import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import News from '../client/components/news.jsx';
import { fakeNewsData } from './jestsetup.js';
import React from 'react';


describe('app tests', () => {

  const wrapper = mount(<News />);

   it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should have a class news', () => {
    expect(wrapper.find('.news')).toBeDefined();
  })

});
