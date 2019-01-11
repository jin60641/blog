import React from 'react';
import Header from './Header';

describe('<Header />', () => {
  it('should render header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);
  });
});
