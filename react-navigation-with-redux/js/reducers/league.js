import { getTeams } from './../db/helpers';

const initialState = {
  currentLeagueRoute: 'PremierLeague',
  teams: getTeams('PremierLeague'),
};

export default function (state = initialState, action) {
  if (action.type === 'Navigation/NAVIGATE' && validRoute(action.routeName)) {
    const currentLeagueRoute = action.routeName;
    const teams = getTeams(currentLeagueRoute);
    return {
      teams,
      currentLeagueRoute,
    };
  }

  return state;
}

function validRoute(route) {
  return ['PremierLeague', 'LaLiga', 'SerieA'].some(league => league === route);
}
