import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';


describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a AppStatusBar', () => {
    expect(app.find('AppStatusBar').exists()).tobe(true)
  })

  it('contains a AppNavigationBar', () => {
    expect(app.find('AppNavigationBar').exists()).tobe(true)
  })
});