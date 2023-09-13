import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthNativeStackNavigator } from './AuthNativeStackNavigator';
import { navigationRef } from './navigationUtils';
import { BottomTabNavigator } from './BottomTabNavigator';
import { storage } from '../storage';

export const RootNavigation = () => {
  const isAuthorized =  storage.getItem('accessToken')

  return (
    <NavigationContainer ref={navigationRef}>
      {!!isAuthorized ? <BottomTabNavigator /> : <AuthNativeStackNavigator />}
    </NavigationContainer>
  );
};
