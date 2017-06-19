import {
  premierLeagueTeams,
  laLigaTeams,
  serieATeams,
  premierLeagueMatches,
  laLigaMatches,
  serieAMatches,
} from './index';

export function getTeams(currentLeague) {
  if (currentLeague === 'PremierLeague') {
    return premierLeagueTeams;
  } else if (currentLeague === 'LaLiga') {
    return laLigaTeams;
  }

  return serieATeams;
}

export function getMatches(currentLeague, team) {
  if (currentLeague === 'PremierLeague') {
    return reduceMatches(premierLeagueMatches, team);
  } else if (currentLeague === 'LaLiga') {
    return reduceMatches(laLigaMatches, team);
  }

  return reduceMatches(serieAMatches, team);
}

function reduceMatches(league, team) {
  let matches = [];
  const filterFunc = ({ team1, team2 }) => team1.name === team || team2.name === team;

  league.rounds.forEach((round) => {
    matches = [...matches, ...round.matches.filter(filterFunc)];
  });

  return matches;
}
