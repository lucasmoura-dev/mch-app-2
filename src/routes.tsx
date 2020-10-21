import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { View } from 'react-native';
import Home from './pages/Home';

const { Navigator, Screen } = createDrawerNavigator ();


const Routes: React.FC = () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home} />
        </Navigator>
    </NavigationContainer>
);

export default Routes;