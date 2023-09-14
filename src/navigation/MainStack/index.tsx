import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import { HomeScreen } from '../../screens/HomeScreen';
import { drawText } from '../../constants/texts';
import { TouchableOpacity } from 'react-native';
import Arrow from '../../assets/Arrow.svg';
import { COLORS } from '../../constants/colors';
import { storage } from '../../storage';
import { SignInScreen } from '../../screens/SignInScreen';
import { navigate } from '../navigationUtils';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const commonOptions = {
  headerShown: true,
  headerTitleStyle: {
    color: COLORS.WHITE,
  },
  headerStyle: {
    backgroundColor: COLORS.DARK_GRAY,
    flex: 1,
  },
};

const onPressBack = () => storage.removeItem('accessToken')

export const HomeStackNavigator = () => {

  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_ROUTES.HOME_SCREEN}>
      <HomeStack.Screen
        options={{
          ...commonOptions,
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity accessibilityRole={'button'} onPress={onPressBack}>
              <Arrow />
            </TouchableOpacity>
          ),
          title: drawText,
        }}
        component={HomeScreen}
        name={NAVIGATION_ROUTES.HOME_SCREEN}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        component={SignInScreen}
        name={NAVIGATION_ROUTES.SIGN_IN_SCREEN}
      />
    </HomeStack.Navigator>
  );
};
