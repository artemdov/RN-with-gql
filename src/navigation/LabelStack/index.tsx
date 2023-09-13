import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LabelStackNavigatorParamList } from './types';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import { LabelScreen } from '../../screens/LabelScreen';

const LabelStack = createNativeStackNavigator<LabelStackNavigatorParamList>();

const commonOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

export const LabelStackNavigator = () => {
  return (
    <LabelStack.Navigator initialRouteName={NAVIGATION_ROUTES.LABEL_SCREEN}>
      <LabelStack.Screen
        component={LabelScreen}
        name={NAVIGATION_ROUTES.LABEL_SCREEN}
        options={{
          ...commonOptions,
        }}
      />
    </LabelStack.Navigator>
  );
};
