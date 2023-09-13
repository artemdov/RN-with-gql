import React, { FC } from 'react';

import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { errorTextStyles } from './styles';

export type ErrorTextProps = {
  errorText: TextProps['children'];
  errorWrongStyle?: StyleProp<TextStyle>;
};

export const ErrorText: FC<ErrorTextProps> = (props) => {
  const { errorText, errorWrongStyle } = props;

  return <Text style={[errorTextStyles.errorTextStyle, errorWrongStyle]}>{errorText}</Text>;
};
