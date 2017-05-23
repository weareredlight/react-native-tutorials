import { GET_TEAM } from './../actions/types';
import { getMatches } from './../db/helpers';

const initialState = {
  currentTeam: '',
  matches: [],
};

export default function (state = initialState, action) {
  if (action.type === GET_TEAM) {
    const matches = getMatches(action.payload.currentLeague, action.payload.team);
    return {
      currentTeam: action.payload.team,
      matches,
    };
  }

  return state;
}
