/* eslint-disable prettier/prettier */
import React from 'react';
// import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoriContent, Categories ,MeelDetail} from './pages';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
// export default () => {
function App() {
  // const scheme = useColorScheme();

  return (
    // <AppearanceProvider>
    <NavigationContainer
    // theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen name="Restaurant Categories" component={Categories} options={Header} />
        <Stack.Screen name="Categori Content" component={CategoriContent} />
        <Stack.Screen name="Meel Detail" component={MeelDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    // </AppearanceProvider>
  );
}

export default App;
