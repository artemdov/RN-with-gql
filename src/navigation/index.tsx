import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthNativeStackNavigator } from './AuthNativeStackNavigator';
import { navigationRef } from './navigationUtils';
import { BottomTabNavigator } from './BottomTabNavigator';
import { storage } from '../storage';
import { useMMKVListener } from 'react-native-mmkv';

export const RootNavigation = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);


  useMMKVListener(() => {
    const token = storage.getItem('accessToken');

    setIsAuthorized(!!token);
  });

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthorized ? <BottomTabNavigator /> : <AuthNativeStackNavigator />}
    </NavigationContainer>
  );
};
