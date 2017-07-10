import { StackNavigator } from 'react-navigation';

import LeagueComponent from '../../components/LeagueComponent';
import TeamComponent from '../../components/TeamComponent';

const routeConfiguration = {
  LeagueScreen: { screen: LeagueComponent },
  TeamScreen: { screen: TeamComponent },
};

const stackNavigatorConfiguration = { headerMode: 'none' };
export const Stack = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
