import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, StatusBar } from 'react-native';
import Header from '../components/Header';

class TeamComponent extends Component {

  static propTypes = {
    team: PropTypes.string.isRequired,
    matches: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }

  renderMatch = ({ item }) => (
    <View style={styles.container}>
      <View style={[styles.textWrapper, styles.home]}>
        <Text>{getTeamName(item.team1.name)}</Text>
      </View>
      <View style={styles.dateWrapper}>
        <Text style={styles.date}>{getDate(item.date)}</Text>
      </View>
      <View style={[styles.textWrapper, styles.away]}>
        <Text>{getTeamName(item.team2.name)}</Text>
      </View>
    </View>
  );

  render() {
    const { team, matches } = this.props;
    const { renderMatch } = this;
    return (
      <View style={styles.screen}>
        <StatusBar barStyle={'light-content'} />
        <Header title={team} />
        <FlatList
          data={matches}
          renderItem={renderMatch}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const getTeamName = name => name.length > 15 ? `${name.substring(0, 15)}...` : name;
const getDate = date => `${date.split('-')[2]}/${date.split('-')[1]}`;

const styles = {
  screen: {
    backgroundColor: 'white',
  },
  home: {
    marginRight: 4,
  },
  away: {
    marginLeft: 4,
  },
  container: {
    marginBottom: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
  },
  textWrapper: {
    backgroundColor: '#F4F3F3',
    flex: 0.4,
    paddingLeft: 12,
    paddingVertical: 12,
  },
  dateWrapper: {
    flex: 0.2,
    backgroundColor: '#69D8BB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
};

const mapStateToProps = state => ({
  team: state.team.currentTeam,
  matches: state.team.matches,
});
export default connect(mapStateToProps)(TeamComponent);
