import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { blendColors } from './helpers';

interface SegmentedControlProps {
  segments: string[];
  onSelect: (index: number) => void;
  type: string;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({ segments, onSelect, type }) => {
  const [selectedSegment, setSelectedSegment] = useState(0);

  const handleSegmentPress = (index: number) => {
    setSelectedSegment(index);
    onSelect(index);
  };

  return (
    <View style={[styles.container, { backgroundColor: blendColors(type, '#FFFFFF') }]}>
      {segments.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            index === 0 && styles.leftSegment,
            index === segments.length - 1 && styles.rightSegment,
            selectedSegment === index && styles.selectedSegment && { backgroundColor: type },
          ]}
          onPress={() => handleSegmentPress(index)}>
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  leftSegment: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightSegment: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  selectedSegment: {
    backgroundColor: '#007bff',
  },
  tabText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default SegmentedControl;
