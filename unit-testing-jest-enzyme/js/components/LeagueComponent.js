import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { getTeam } from '../actions/team';

class LeagueComponent extends Component {

  static propTypes = {
    league: PropTypes.shape().isRequired,
    getTeam: PropTypes.func.isRequired,
  }

  renderTeam = ({ item, index }) => (
    <TouchableOpacity
      style={{ backgroundColor: index % 2 ? 'white' : '#F6F6F6' }}
      onPress={() => this.props.getTeam(this.props.league.routeName, item.name)}
    >
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Ionicons name={'ios-arrow-forward'} color={'black'} size={20} />
      </View>
    </TouchableOpacity>
  );

  render() {
    const { league } = this.props;
    const { renderTeam } = this;

    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Header title={league.name} image={null} />
        <FlatList
          data={league.clubs}
          renderItem={renderTeam}
        />
      </View>
    );
  }
}

const styles = {
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
  },
  container: {
    flex: 1,
  },
};

const mapStateToProps = ({ league }) => ({ league: league.teams });
export default connect(mapStateToProps, { getTeam })(LeagueComponent);
