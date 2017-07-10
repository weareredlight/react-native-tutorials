import React, { Component, PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { Stack } from './navigationConfiguration';

class StackNavigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  backAction = () => this.navigator.props.navigation.goBack();

  render() {
    const { dispatch, navigation } = this.props;

    return (
      <Stack
        ref={(ref) => { this.navigator = ref; }}
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigation,
          })
        }
      />
    );
  }
}

export default connect(state => ({ navigation: state.stack }))(StackNavigation);
