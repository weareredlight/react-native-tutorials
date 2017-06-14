import { GET_TEAM } from './types';
import { getMatches } from '../db/helpers';
import { getTeamLogo } from '../api';

function teamAction(currentLeague, currentTeam, image) {
  const matches = getMatches(currentLeague, currentTeam);
  return { type: GET_TEAM, payload: { matches, currentTeam, image } };
}

export function getTeam(currentLeague, currentTeam) {
  return dispatch => getTeamLogo(currentTeam)
    .then(response => response.json())
    .then(response => dispatch(teamAction(currentLeague, currentTeam, response.Image)))
    .catch(() => dispatch(teamAction(currentLeague, currentTeam, null)))
  ;
}
