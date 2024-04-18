import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Pill = ({ num }: { num: string }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{num}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'green',
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
  },
});

export default Pill;
