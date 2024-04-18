import { Text, View } from 'react-native';

const Moves = ({ pokemon }) => {
  return (
    <View>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export default Moves;
