import * as React from 'react';
//Third Party Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserForm from './src/screen/UserForm';
import Main from './src/screen/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={{ title: "Main Screen" }} component={Main} />
          <Stack.Screen name="UserForm" options={{ title: "User Detail" }} component={UserForm} />
         
        </Stack.Navigator>
      </NavigationContainer>
      
  );
}
