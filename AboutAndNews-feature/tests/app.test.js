import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/app.jsx';
import React from 'react';
import { handleInfoClick } from './jestsetup.js';


describe('app tests', () => {

  const wrapper = mount(<App />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(28);
  });

  it('should render a classname about', () => {
    expect(wrapper.find('.aboutShow')).toBeDefined();
  });

  it('should render a show more button', () => {
    expect(wrapper.find(<a onClick={handleInfoClick}>Show Less</a>))
  })

  it('should render read more', () => {
    expect(wrapper.find('.aboutShow').text()).toEqual('AboutShow More')
  })


   it('should render a show Less button', () => {
    wrapper.setState({
      open: true
    })
    expect(wrapper.find(
     <a onClick={handleInfoClick}>Show Less</a>))
  })


  it('should render a read Less', () => {
    wrapper.setState({
      open: true
    })

    expect(wrapper.find('.aboutShow').text()).toEqual('AboutShow Less')
  })

});
