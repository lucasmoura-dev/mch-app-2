import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

import Home from './pages/Home';
import Plants from './pages/Plants';

type RootStackParamList = {
  Home: undefined,
  Plants: { brand?: string, city?: string, online?: number | boolean } | undefined,
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => (
  <NavigationContainer>
      <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Plants" component={Plants} />
      </Navigator>
  </NavigationContainer>
);

export default Routes;
