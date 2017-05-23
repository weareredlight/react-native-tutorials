import { DrawerNavigator } from 'react-navigation';
import StackNavigation from '../stack/StackNavigation';

const routeConfiguration = {
  PremierLeague: {
    screen: StackNavigation,
    navigationOptions: {
      drawer: { label: 'Premier League' },
    },
  },
  LaLiga: {
    screen: StackNavigation,
    navigationOptions: {
      drawer: { label: 'La liga' },
    },
  },
  SerieA: {
    screen: StackNavigation,
    navigationOptions: {
      drawer: { label: 'Serie A' },
    },
  },
};

export const Drawer = DrawerNavigator(routeConfiguration);
