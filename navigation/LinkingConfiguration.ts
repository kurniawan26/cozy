/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home'
            }
          },
          Card: {
            screens: {
              Card: 'card'
            }
          },
          Favorite: {
            screens: {
              Favorite: 'favorite'
            }
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Detail: {
        path: 'item/:id',
        parse: {
          id: Number,
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
