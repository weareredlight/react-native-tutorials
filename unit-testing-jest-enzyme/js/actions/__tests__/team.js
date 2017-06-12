import mockStore from 'redux-mock-store';
import * as actions from '../team';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('GET_TEAM (Barcelona)', () => {
  store.dispatch(actions.getTeam('LaLiga', 'Barcelona'));
  expect(store.getActions()).toMatchSnapshot();
});

it('GET_TEAM (null)', () => {
  store.dispatch(actions.getTeam(null, null));
  expect(store.getActions()).toMatchSnapshot();
});