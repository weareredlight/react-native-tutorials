export function getTeamLogo(currentTeam) {
  return fetch(`http://api.duckduckgo.com/?q=${currentTeam}&format=json`);
}
