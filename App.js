import React from 'react';
import {createAppContainer, createStackNavigator,createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import SignInScreen from './src/screens/SignIn/SignInScreen';
import WeatherScreen from "./src/screens/Weather/WeatherScreen"
import {Provider as AuthProvider} from "./src/context/AuthContext"

const stackNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createDrawerNavigator({
    Weather: WeatherScreen
  })
});

const App = createAppContainer(stackNavigator);
export default () => {
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
};
