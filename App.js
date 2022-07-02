import React from 'react';
import HomePage from './src/screens/homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/register';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
              name='HomePage'
              component={HomePage}
              options={{headerShown: false}}
          />
          <Stack.Screen 
            name='Register'
            component={Register}
            options={{presentation: "containedTransparentModal", headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
