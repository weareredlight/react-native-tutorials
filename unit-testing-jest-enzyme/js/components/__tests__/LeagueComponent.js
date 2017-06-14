import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import mockStore from 'redux-mock-store';
import { FlatList } from 'react-native';
import { expect as expectChai } from 'chai';
import LeagueComponent from '../LeagueComponent';

// eslint-disable-next-line
const league = {"name":"English Premier League 2016/17","routeName":"PremierLeague","clubs":[{"key":"chelsea","name":"Chelsea","code":"CHE"},{"key":"arsenal","name":"Arsenal","code":"ARS"},{"key":"tottenham","name":"Tottenham Hotspur","code":"TOT"},{"key":"westham","name":"West Ham United","code":"WHU"},{"key":"crystalpalace","name":"Crystal Palace","code":"CRY"},{"key":"manutd","name":"Manchester United","code":"MUN"},{"key":"mancity","name":"Manchester City","code":"MCI"},{"key":"everton","name":"Everton","code":"EVE"},{"key":"liverpool","name":"Liverpool","code":"LIV"},{"key":"westbrom","name":"West Bromwich Albion","code":"WBA"},{"key":"stoke","name":"Stoke City","code":"STK"},{"key":"sunderland","name":"Sunderland","code":"SUN"},{"key":"southampton","name":"Southampton","code":"SOU"}]};

it('renders all children', () => {
  const initialState = { league: { teams: league } };
  const store = mockStore(initialState);

  const wrapper = shallow(<LeagueComponent store={store} />);

  const component = shallow(wrapper.getNodes()[0]);

  expectChai(component.find(FlatList).length).to.equal(1);
  expectChai(component.find(FlatList).at(0).props().data.length).to.equal(league.clubs.length);
  expect(toJson(component)).toMatchSnapshot();
});
