import React, { FC } from 'react';

import { Text, View } from 'react-native';
import { ChipProps } from './types';
import { chipStyle } from './styles';

export const Chip: FC<ChipProps> = (props) => {
  const { text, containerStyles, textStyles } = props;

  return (
    <View style={[chipStyle.container, containerStyles]}>
      <Text style={[chipStyle.text, textStyles]}>{text}</Text>
    </View>
  );
};
