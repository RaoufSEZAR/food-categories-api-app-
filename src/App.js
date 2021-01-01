/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoriContent, Categories ,MeelDetail} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurant Categories" component={Categories} />
        <Stack.Screen name="Categori Content" component={CategoriContent} />
        <Stack.Screen name="Meel Detail" component={MeelDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
