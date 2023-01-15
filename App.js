import * as React from 'react';
//Third Party Packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
//redux State
import InitialState from "./src/redux/reducer";

import UserForm from './src/screen/UserForm';
import Main from './src/screen/Main';
import PokemonList from './src/screen/PokemonList';
import PokemonDetails from './src/screen/PokemonDetail';
const Stack = createNativeStackNavigator();

const reducer = createStore(combineReducers({data:InitialState}), applyMiddleware(thunk));
export default function App() {
  return (
    
    <Provider store={reducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" options={{ title: "Main Screen" }} component={Main} />
          <Stack.Screen name="UserForm" options={{ title: "User Detail" }} component={UserForm} />
          <Stack.Screen name="PokemonList" options={{ title: "Pokemon List" }} component={PokemonList} />
          <Stack.Screen name="PokemonDetail" options={{ title: "Pokemon Details" }}
           component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
