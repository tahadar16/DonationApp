import './gestureHandler/gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainNavigation';


const App = () =>  {
  
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}

export default App;
