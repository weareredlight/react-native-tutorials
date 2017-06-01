import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <ActivityIndicator
      size={'large'}
      style={loaderStyle}
    />
  </View>
);

const loaderStyle = {
  height: 80,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8,
};

export default Spinner;
