import mockStore from 'redux-mock-store';
import { getLeague } from '../../actions/league';
import league from '../league';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('INITIAL STATE', () => {
  const action = { type: 'DUMMY' };
  expect(league(undefined, action)).toMatchSnapshot();
});

it('GET_LEAGUE (LaLiga)', () => {
  expect(league(undefined, getLeague('LaLiga'))).toMatchSnapshot();
});
