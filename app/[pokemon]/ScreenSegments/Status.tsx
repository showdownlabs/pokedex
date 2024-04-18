import { Text, View } from 'react-native';
import UIProgressBar from '../components/StatBar';
import { rgbToHex } from '../components/SegmentedControl/helpers';

const BackgroundColorMapper = {
  hp: rgbToHex([251, 65, 71]),
  attack: rgbToHex([253, 157, 99]),
  defense: rgbToHex([253, 216, 98]),
  'special-attack': rgbToHex([253, 216, 98]),
  'special-defense': rgbToHex([126, 215, 119]),
  speed: rgbToHex([253, 127, 164]),
};

const Status = ({ pokemon }) => {
  return (
    <View>
      {pokemon.pokemon_v2_pokemonstats.map((stat, index) => (
        <UIProgressBar
          key={index}
          percent={stat.base_stat}
          backgroundColor={BackgroundColorMapper[stat.pokemon_v2_stat.name]}
          style={{ marginVertical: 10 }}
        />
      ))}
    </View>
  );
};

export default Status;
