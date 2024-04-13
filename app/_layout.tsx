import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Slot, Stack } from 'expo-router';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Stack
      screenOptions={{
        headerTitle: '',
        headerBackTitle: '',
        headerTransparent: true,
        gestureEnabled: true,
      }}>
      <Slot />
    </Stack>
  </ApolloProvider>
);

export default App;
