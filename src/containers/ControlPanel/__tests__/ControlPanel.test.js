import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store';
import ControlPanel from '..';

describe('<ControlPanel />', () => {
  it('component render', () => {
    const panel = renderer.create(
      <Provider store={store}>
        <ControlPanel delay={1} />
      </Provider>,
    ).toJSON();
    expect(panel).toMatchSnapshot();
  });
});
