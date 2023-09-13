import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATION_ROUTES } from '../../constants/navigationRoutes';
import React from 'react';
import { TabStackNavigatorParamList } from './types';
import HomeIcon from '../../assets/Home.svg';
import GiftIcon from '../../assets/Gift.svg';
import LabelIcon from '../../assets/Lable.svg';
import UserIcon from '../../assets/User.svg';
import { LabelStackNavigator } from '../LabelStack';
import { GiftStackNavigator } from '../MenuStack';
import { getTabBarCustomIcon } from '../../functions/getTabBarCustomIcon';
import { HomeStackNavigator } from '../MainStack';
import { UserStackNavigator } from '../UserStack';
import { EMPTY_STRING } from '../../constants/fallbacks';

const commonOptions = {
  tabBarStyle: {
    height: 90,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  tabBarLabel: EMPTY_STRING,
};

const TabNavigatorStack = createBottomTabNavigator<TabStackNavigatorParamList>();

export const BottomTabNavigator = () => {

  return (
    <TabNavigatorStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={NAVIGATION_ROUTES.HOME_NAVIGATOR}
    >
      <TabNavigatorStack.Screen
        name={NAVIGATION_ROUTES.HOME_NAVIGATOR}
        component={HomeStackNavigator}
        options={{
          ...commonOptions,
          tabBarIcon: ({ focused }) => getTabBarCustomIcon(focused, HomeIcon),
        }}
      />
      <TabNavigatorStack.Screen
        name={NAVIGATION_ROUTES.GIFT_NAVIGATOR}
        component={GiftStackNavigator}
        options={{
          ...commonOptions,
          tabBarIcon: ({ focused }) => getTabBarCustomIcon(focused, GiftIcon),
        }}
      />
      <TabNavigatorStack.Screen
        name={NAVIGATION_ROUTES.LABEL_NAVIGATOR}
        component={LabelStackNavigator}
        options={{
          ...commonOptions,
          tabBarIcon: ({ focused }) => getTabBarCustomIcon(focused, LabelIcon),
        }}
      />
      <TabNavigatorStack.Screen
        name={NAVIGATION_ROUTES.USER_NAVIGATOR}
        component={UserStackNavigator}
        options={{
          ...commonOptions,
          tabBarIcon: ({ focused }) => getTabBarCustomIcon(focused, UserIcon),
        }}
      />
    </TabNavigatorStack.Navigator>
  );
};
