import './gestureHandler/gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/MainNavigation';
import { Provider } from "react-redux"
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView } from 'react-native';



const App = () =>  {
  
  return (
    <Provider store={store}>
      
      <PersistGate persistor={persistor} loading= {null}>
      
        <NavigationContainer>
          
            <MainStackNavigator/>
          
        </NavigationContainer>
        
      </PersistGate>
      
    </Provider>
  );
}

export default App;
