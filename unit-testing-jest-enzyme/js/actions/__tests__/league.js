import mockStore from 'redux-mock-store';
import * as actions from '../league';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('GET_LEAGUE (LaLiga)', () => {
  store.dispatch(actions.getLeague('LaLiga'));
  expect(store.getActions()).toMatchSnapshot();
});
