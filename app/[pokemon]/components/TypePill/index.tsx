import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TypeColors } from '../../../utils';

export const TypePill = ({ type }: { type: string }) => {
  return (
    <View style={[styles.container, { backgroundColor: TypeColors[type] }]}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
  },
});

export default TypePill;
