import React from 'react';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { getLeague } from '../../actions/league';

const CustomDrawerContent = (props) => {
  return (
    <DrawerItems {...props} onItemPress={({ route }) => props.getLeague(route.key)} />
  );
};

export default connect(undefined, { getLeague })(CustomDrawerContent);
