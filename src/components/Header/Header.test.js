import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';

describe('<Header />', () => {
  it('should render Link', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
