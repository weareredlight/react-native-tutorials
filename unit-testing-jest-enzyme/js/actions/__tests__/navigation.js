import mockStore from 'redux-mock-store';
import * as actions from '../navigation';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('BACK', () => {
  store.dispatch(actions.back());
  expect(store.getActions()).toMatchSnapshot();
});

it('TOGGLE_DRAWER', () => {
  store.dispatch(actions.toggleDrawer());
  expect(store.getActions()).toMatchSnapshot();
});