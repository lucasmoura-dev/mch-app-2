import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';

const { Navigator, Screen } = createDrawerNavigator ();

import Home from './pages/Home';
import Plants from './pages/Plants';

const Routes: React.FC = () => (
  <NavigationContainer>
      <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="Plants" component={Plants} />
      </Navigator>
  </NavigationContainer>
);

export default Routes;
