import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from './pages/Home';
import Plants from './pages/Plants';

import colors from './styles/colors';

type RootStackParamList = {
  Home: undefined;
  Plants:
    | { brand?: string; city?: string; online?: number | boolean }
    | undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Plants" component={Plants} options={{ title: 'Plantas' }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
