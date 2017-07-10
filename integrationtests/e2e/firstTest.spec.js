// Integration test
describe('Header', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render Header', async () => {
    await expect(element(by.id('Header'))).toBeVisible();
    await expect(element(by.id('Header.Menu'))).toBeVisible();
    await expect(element(by.id('Header.Title'))).toBeVisible();
    await expect(element(by.id('DrawerItems'))).toBeNotVisible();
  });

  it('should open drawer', async () => {
    await element(by.id('Header.Menu')).tap();
    await waitFor(element(by.id('DrawerItems'))).toBeVisible().withTimeout(2000);
    await expect(element(by.text('PremierLeague'))).toBeVisible();
    await expect(element(by.text('LaLiga'))).toBeVisible();
    await expect(element(by.text('SerieA'))).toBeVisible();
  });
})

// E2E test
const teams = [
  { league: 'PremierLeague', team: 'Arsenal' },
  { league: 'LaLiga', team: 'Barcelona' },
  { league: 'SerieA', team: 'Milan' },
];

for (let i = 0; i < teams.length; i += 1) {
  const league = teams[i].league;
  const team = teams[i].team;

  describe(`${team} - ${league}`, () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });

   it('should render team matches screen', async () => {
      await element(by.id('Header.Menu')).tap();
      await waitFor(element(by.id('DrawerItems'))).toBeVisible().withTimeout(2000);
      await element(by.text(league)).tap();
      await waitFor(element(by.text(team))).toBeVisible().withTimeout(2000);
      await element(by.id(`Team.${team}`)).tap();
      await waitFor(element(by.id('TeamMatches'))).toBeVisible().withTimeout(5000);
      await expect(element(by.id('Header')).atIndex(0)).toBeVisible();
      await expect(element(by.id('Header.Title')).atIndex(0)).toHaveText(team);
    });
  })
}
