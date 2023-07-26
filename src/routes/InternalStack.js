import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import EResources from '../screens/EResources';
import EJournals from '../screens/EJournals';
import DrawerNavigator from './homeStack';
import {createStackNavigator} from '@react-navigation/stack';

export default function InternalStack() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SecondScreen">
        <Stack.Screen name="EJournals" component={EJournals} />
        <Stack.Screen name="EResources" component={EResources} />
        <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}