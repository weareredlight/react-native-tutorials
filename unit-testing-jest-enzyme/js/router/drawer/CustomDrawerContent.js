import React, { PropTypes } from 'react';
import { DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { getLeague } from '../../actions/league';

const CustomDrawerContent = props => (
  <DrawerItems {...props} onItemPress={({ route }) => props.getLeague(route.key)} />
);

CustomDrawerContent.propTypes = {
  getLeague: PropTypes.func.isRequired,
};

export default connect(undefined, { getLeague })(CustomDrawerContent);
