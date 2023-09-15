import { TextProps, ViewProps } from 'react-native';

export type ChipProps = {
  containerStyles?: ViewProps['style'];
  iconStyles?: ViewProps['style'];
  text?: TextProps['children'];
  textStyles?: TextProps['style'];
};
