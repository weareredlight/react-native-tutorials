import mockStore from 'redux-mock-store';
import * as actions from '../team';

const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => ({
    Image: 'STRING_URL',
  }),
}));

it('GET_TEAM (Barcelona)', async () => {
  await store.dispatch(actions.getTeam('LaLiga', 'Barcelona'));
  expect(store.getActions()).toMatchSnapshot();
});

it('GET_TEAM (null)', () => {
  store.dispatch(actions.getTeam(null, null));
  expect(store.getActions()).toMatchSnapshot();
});
