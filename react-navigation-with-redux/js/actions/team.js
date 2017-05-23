import { GET_TEAM } from './types';

export function getTeam(currentLeague, team) {
  return {
    type: GET_TEAM,
    payload: { currentLeague, team },
  };
}
