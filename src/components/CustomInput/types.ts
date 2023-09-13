import type { TextInputProps, TouchableOpacityProps, ViewProps, TextProps } from 'react-native';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

export type CustomInputProps = {
  InputIcon?: FC<SvgProps>;
  errorText?: string | boolean;
  eyeStyles?: TouchableOpacityProps['style'];
  inputContainerStyles?: ViewProps['style'];
  inputStyles?: TextProps['style'];
  isError?: boolean;
  isPasswordSecure?: boolean;
  label?: string;
  labelTextStyles?: ViewProps['style'];
  onChangeText?: TextInputProps['onChangeText'];
  placeholderText?: TextInputProps['placeholder'];
  rootContainerStyles?: ViewProps['style'];
  setIsInputSecureTextEntryOnPress?: TouchableOpacityProps['onPress'];
  value?: TextInputProps['value'];
  wrapperInputStyles?: ViewProps['style'];
};
