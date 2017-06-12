import { GET_TEAM } from './types';
import { getMatches } from '../db/helpers';

export function getTeam(currentLeague, currentTeam) {
  const matches = getMatches(currentLeague, currentTeam);
  return {
    type: GET_TEAM,
    payload: { matches, currentTeam },
  };
}
