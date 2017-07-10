import mockStore from 'redux-mock-store';
import { getTeam } from '../../actions/team';
import team from '../team';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

it('INITIAL STATE', () => {
  const action = { type: 'DUMMY' };
  expect(team(undefined, action)).toMatchSnapshot();
});

it('GET_TEAM (LaLiga, Barcelona)', () => {
  expect(team(undefined, getTeam('LaLiga', 'Barcelona'))).toMatchSnapshot();
});
