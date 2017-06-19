import { GET_LEAGUE } from './types';
import { getTeams } from '../db/helpers';

export function getLeague(currentLeagueRoute) {
  const teams = getTeams(currentLeagueRoute);

  return {
    type: GET_LEAGUE,
    payload: { teams },
  };
}
