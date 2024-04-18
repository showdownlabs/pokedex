import { gql, useQuery } from '@apollo/client';
import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PokemonRow, { PokemonListItem } from './components/PokemonRow';
import { useNavigation } from 'expo-router';

const GET_POKEMON_LIST = gql`
  query samplePokeAPIquery($offset: Int = 0) {
    pokemon_v2_pokemon(limit: 100, offset: $offset) {
      id
      name
    }
  }
`;

export default function Page() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const navigation = useNavigation();
  navigation.setOptions({ headerShown: false });

  const { fetchMore } = useQuery(GET_POKEMON_LIST, {
    variables: { offset },
    onCompleted: data => {
      setPokemons([...pokemons, ...data.pokemon_v2_pokemon]);
    },
  });

  const fetchMorePokemons = () => {
    fetchMore({
      variables: {
        offset: offset,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        setOffset(offset + 100);
        return {
          pokemon_v2_pokemon: [...prev.pokemon_v2_pokemon, ...fetchMoreResult.pokemon_v2_pokemon],
        };
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={pokemons}
        renderItem={({ item }) => <PokemonRow pokemon={item} />}
        keyExtractor={item => item.name.toString()}
        onEndReached={fetchMorePokemons}
        onEndReachedThreshold={1}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    margin: 20,
  },
});
