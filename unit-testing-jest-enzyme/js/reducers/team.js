import { GET_TEAM } from './../actions/types';

const initialState = {
  image: '',
  currentTeam: '',
  matches: [],
};

export default function (state = initialState, action) {
  if (action.type === GET_TEAM) {
    return { ...action.payload };
  }

  return state;
}
