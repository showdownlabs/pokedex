import { StyleSheet, Text, View } from 'react-native';
import { capitalizeFirstLetter } from '../../utils';

const About = ({ pokemon }) => {
  const pokedex_description =
    pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text || '';
  return (
    <View style={style.container}>
      <Text style={style.title}>About</Text>
      <Text>
        {capitalizeFirstLetter(pokemon.name)} is a {pokemon.height} decimetres tall Pokémon. It has
        a base experience of {pokemon.base_experience}.
      </Text>
      <Text style={style.title}>Pokédex Description:</Text>
      <Text>{pokedex_description.replace(/(\r\n|\n|\r)/gm, ' ')}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    paddingTop: 10,
    fontWeight: 'bold',
  },
});

export default About;
