import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GiftStackNavigatorParamList } from './types';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import { GiftScreen } from '../../screens/GiftScreen';

const GiftStack = createNativeStackNavigator<GiftStackNavigatorParamList>();

const commonOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

export const GiftStackNavigator = () => {
  return (
    <GiftStack.Navigator initialRouteName={NAVIGATION_ROUTES.GIFT_SCREEN}>
      <GiftStack.Screen
        component={GiftScreen}
        name={NAVIGATION_ROUTES.GIFT_SCREEN}
        options={{
          ...commonOptions,
          headerTitleAlign: 'center',
        }}
      />
    </GiftStack.Navigator>
  );
};
