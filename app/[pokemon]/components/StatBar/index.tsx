import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const UIProgressBar = ({ percent, backgroundColor, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.bar, { width: `${percent}%`, backgroundColor }]} />
      <Text style={styles.percentText}>{percent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  bar: {
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  percentText: {
    position: 'absolute',
    right: 10,
    top: 1,
    color: 'black',
  },
});

export default UIProgressBar;
