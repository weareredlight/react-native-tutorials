import { GET_LEAGUE } from '../actions/types';
import { getTeams } from '../db/helpers';

const initialState = {
  teams: getTeams('PremierLeague'),
};

export default function (state = initialState, action) {
  if (action.type === GET_LEAGUE) {
    return { ...action.payload };
  }

  return state;
}
