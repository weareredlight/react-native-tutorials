import React, { PropTypes } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import { back, toggleDrawer } from '../actions/navigation';

const Header = ({ back, toggleDrawer, navigation, title, image }) => {
  const firstRoute = navigation.routes[navigation.index].routeName === 'LeagueScreen';
  const name = firstRoute ? 'ios-menu' : 'ios-arrow-round-back';
  const cb = firstRoute ? toggleDrawer : back;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        { image !== null && image.length > 0 && <Image
          style={styles.image}
          source={{ uri: image }}
        />
        }
        <Text style={styles.text}>{title}</Text>
      </View>
      <Ionicons name={name} color={'white'} size={32} onPress={cb} />
    </View>
  );
};

Header.propTypes = {
  back: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#69D8BB',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    marginRight: 8,
    width: 16,
    height: 16,
  },
});

const mapStateToProps = state => ({ navigation: state.stack });
export default connect(mapStateToProps, { back, toggleDrawer })(Header);
