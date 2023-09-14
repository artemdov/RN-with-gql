import React from 'react';

import { AuthNativeStackNavigatorParamList } from './types';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import { SignInScreen } from '../../screens/SignInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../screens/HomeScreen';
import { BottomTabNavigator } from '../BottomTabNavigator';
import { HomeStackNavigator } from '../MainStack';

const AuthNativeStack = createNativeStackNavigator<AuthNativeStackNavigatorParamList>();

const optionsHeaderShownFalse = { headerShown: false };

export const AuthNativeStackNavigator = () => {
  return (
    <AuthNativeStack.Navigator initialRouteName={NAVIGATION_ROUTES.SIGN_IN_SCREEN}>
      <AuthNativeStack.Screen
        component={SignInScreen}
        name={NAVIGATION_ROUTES.SIGN_IN_SCREEN}
        options={optionsHeaderShownFalse}
      />
      <AuthNativeStack.Screen
        component={HomeStackNavigator}
        name={NAVIGATION_ROUTES.HOME_NAVIGATOR}
        options={optionsHeaderShownFalse}
      />
    </AuthNativeStack.Navigator>
  );
};
