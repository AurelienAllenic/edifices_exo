// DetailScreen.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const DetailScreen = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Count from Redux: {count}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(DetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
