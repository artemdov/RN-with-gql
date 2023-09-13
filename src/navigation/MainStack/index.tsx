import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from './types';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import { HomeScreen } from '../../screens/HomeScreen';
import { drawText } from '../../constants/texts';
import { TouchableOpacity } from 'react-native';
import { goBack, navigate } from '../navigationUtils';
import Arrow from '../../assets/Arrow.svg';
import { COLORS } from '../../constants/colors';
import { EMPTY_FUNCTION } from '../../constants/fallbacks';

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

export const HomeStackNavigator = () => {

  return (
    <HomeStack.Navigator initialRouteName={NAVIGATION_ROUTES.HOME_SCREEN}>
      <HomeStack.Screen
        options={{
          ...commonOptions,
          headerLeft: () => (
            <TouchableOpacity accessibilityRole={'button'} onPress={EMPTY_FUNCTION}>
              <Arrow />
            </TouchableOpacity>
          ),
          title: drawText,
        }}
        component={HomeScreen}
        name={NAVIGATION_ROUTES.HOME_SCREEN}
      />
    </HomeStack.Navigator>
  );
};
