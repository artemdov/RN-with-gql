import React from 'react';
import { HomeScreenView } from './HomeScreenView';
import { Dimensions } from 'react-native';
import { COLORS } from '../../constants/colors';

export const HomeScreen = () => {
  const { width, height } = Dimensions.get('window');
  const containerStyles = { backgroundColor: COLORS.PURPLE };
  const textStyles = { color: COLORS.WHITE };

  return <HomeScreenView
    containerStyles={containerStyles}
    height={height}
    textStyles={textStyles}
    width={width}
  />;
};
