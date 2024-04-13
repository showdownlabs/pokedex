import { gql, useQuery } from '@apollo/client';
import { Image } from 'expo-image';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SafeAreaView, Text, View } from 'react-native';
import PokeballSvg from '../../assets/pokeball';
import { TypeColors, capitalizeFirstLetter } from '../utils';
import { TypePill } from './components/TypePill';
import SegmentedControl from './components/SegmentedControl';
import { About, Status } from './ScreenSegments';

const GET_POKEMON = gql`
  query pokemonDetailsQuery($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      name
      id
      height
      base_experience
      order
      pokemon_species_id
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(where: { language_id: { _eq: 9 } }, limit: 1) {
          flavor_text
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
    }
  }
`;

export default function Page() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const [backgroundColor, setBackgroundColor] = useState('white');
  const [selectedSegment, setSelectedSegment] = useState(0);

  const { data, loading } = useQuery(GET_POKEMON, {
    fetchPolicy: 'cache-first',
    variables: { id },
    onCompleted: data => {
      const pokemon = data.pokemon_v2_pokemon[0];
      const types = pokemon.pokemon_v2_pokemontypes.map((type: any) => type.pokemon_v2_type.name);
      const typeColors = types.map((type: string) => TypeColors[type]);
      setBackgroundColor(typeColors[0]);
      navigation.setOptions({
        headerTitle: `${capitalizeFirstLetter(pokemon.name)} #${pokemon.id}`,
        headerStyle: {
          backgroundColor: typeColors[0],
        },
      });
    },
  });

  const pokemon = data?.pokemon_v2_pokemon[0];

  if (loading) return <Text>Loading...</Text>;
  if (!pokemon) return <Text>Not found</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[backgroundColor, '#fff']} style={styles.gradient}>
        <View style={styles.pokeballContainer}>
          <PokeballSvg />
        </View>
        <View style={styles.imageContainer}>
          <Image
            contentFit="contain"
            style={[styles.image, { shadowColor: backgroundColor }]}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`,
            }}
          />
          <TypePill type={pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name} />
        </View>
      </LinearGradient>
      <View style={styles.segmentContainer}>
        <SegmentedControl
          segments={['About', 'Status']}
          onSelect={setSelectedSegment}
          type={backgroundColor}
        />
        <View style={styles.segments}>
          {selectedSegment === 0 && <About pokemon={pokemon} />}
          {selectedSegment === 1 && <Status pokemon={pokemon} />}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  gradient: {
    flex: 1,
    width: '100%',
    paddingVertical: 50,
  },
  pokeballContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 250,
    height: 250,
  },
  segmentContainer: {
    flex: 1,
    width: '100%',
  },
  segments: {
    padding: 20,
  },
});
