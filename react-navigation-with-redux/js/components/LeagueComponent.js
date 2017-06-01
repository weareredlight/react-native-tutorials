import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { getTeam } from '../actions/team';

class LeagueComponent extends Component {

  static propTypes = {
    league: PropTypes.shape().isRequired,
    currentLeagueRoute: PropTypes.string.isRequired,
    getTeam: PropTypes.func.isRequired,
  }

  renderTeam = ({ item, index }) => (
    <TouchableOpacity
      style={{ backgroundColor: index % 2 ? 'white' : '#F6F6F6' }}
      onPress={() => this.props.getTeam(this.props.currentLeagueRoute, item.name)}
    >
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Ionicons name={'ios-arrow-forward'} color={'black'} size={20} />
      </View>
    </TouchableOpacity>
  );

  render() {
    const { league } = this.props;
    const { renderTeam } = this;

    return (
      <View>
        <StatusBar barStyle={'light-content'} />
        <Header title={league.name} />
        <FlatList
          data={league.clubs}
          renderItem={renderTeam}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
};

const mapStateToProps = state => ({
  league: state.league.teams,
  currentLeagueRoute: state.league.currentLeagueRoute,
});
export default connect(mapStateToProps, { getTeam })(LeagueComponent);
