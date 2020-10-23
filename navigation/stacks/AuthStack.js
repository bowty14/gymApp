import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../../screens/auth/SignUpScreen'
import SignInScreen from '../../screens/auth/SignInScreen'

const AuthStackNav = createStackNavigator();

const AuthStack = () => {
  return(
    <NavigationContainer independent={true}>
      <AuthStackNav.Navigator>
        <AuthStackNav.Screen 
        name='SignIn'
        component={SignInScreen}
        />
        <AuthStackNav.Screen
        name='SignUp'
        component={SignUpScreen} />
      </AuthStackNav.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack