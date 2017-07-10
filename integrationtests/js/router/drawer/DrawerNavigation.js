import React, { PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Drawer } from './navigationConfiguration';

const DrawerNavigation = ({ dispatch, navigation }) => (
  <Drawer
    navigation={
      addNavigationHelpers({
        dispatch,
        state: navigation,
      })
    }
  />
);

DrawerNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({ navigation: state.drawer });
export default connect(mapStateToProps)(DrawerNavigation);
