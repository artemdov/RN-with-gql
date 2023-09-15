import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserStackNavigatorParamList } from './types';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import { UserScreen } from '../../screens/UserScreen';

const UserStack = createNativeStackNavigator<UserStackNavigatorParamList>();

const commonOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

export const UserStackNavigator = () => {
  return (
    <UserStack.Navigator initialRouteName={NAVIGATION_ROUTES.USER_SCREEN}>
      <UserStack.Screen
        component={UserScreen}
        name={NAVIGATION_ROUTES.USER_SCREEN}
        options={{
          ...commonOptions,
          headerTitleAlign: 'center',
        }}
      />
    </UserStack.Navigator>
  );
};
