import React, { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { getShareColorIcon } from './getShareColorIcon';

export const getTabBarCustomIcon = (focused: boolean, Icon: FC<SvgProps>) => (
  <Icon opacity={getShareColorIcon(focused)} />
);
