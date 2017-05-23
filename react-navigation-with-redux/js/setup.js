import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Spinner from './components/loaders/Spinner';

import DrawerNavigation from './router/drawer/DrawerNavigation';
import configureStore from './configureStore';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
    };
  }

  render() {
    const { store } = this.state;

    return !store
      ? <Spinner />
      : <Provider store={store}>
        <DrawerNavigation />
      </Provider>
    ;
  }
}

export default Root;
