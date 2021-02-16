import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

test('Should render App Component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
