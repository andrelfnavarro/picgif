import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { GifDetails, GifDetailsRouteParams } from '../screens/GifDetails';

import { Home } from '../screens/Home';

export type AppStackParamList = {
  Home: undefined;
  GifDetails: GifDetailsRouteParams;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="GifDetails" component={GifDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
