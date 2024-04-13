import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Pill from '../Pill';
import { capitalizeFirstLetter } from '../../utils';
import { Image } from 'expo-image';

export type PokemonListItem = {
  id: string;
  name: string;
};

const PokemonRow = ({ pokemon }: { pokemon: PokemonListItem }) => {
  return (
    <View style={styles.container}>
      <Pill num={pokemon.id} />
      <Link href={`/pokemon/${pokemon.id}`}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            contentFit="cover"
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
            }}
          />
          <Text style={styles.name}>{capitalizeFirstLetter(pokemon.name)}</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0.05,
    },
    shadowOpacity: 0.1,
    backgroundColor: 'white',
    flex: 1,
    margin: 5,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PokemonRow;
