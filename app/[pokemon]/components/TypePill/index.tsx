import { Text, View } from 'react-native';
import { TypeColors } from '../../../utils';

export const TypePill = ({ type }: { type: string }) => {
  return (
    <View
      style={{
        backgroundColor: TypeColors[type],
        borderRadius: 20,
        padding: 5,
        margin: 5,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
      }}>
      <Text>{type}</Text>
    </View>
  );
};
