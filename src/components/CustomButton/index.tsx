import React, { FC } from 'react';

import { Text, TextProps, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { getCustomButtonStyles } from './styles';
import { SvgProps } from 'react-native-svg';

export type CustomButtonProps = {
  buttonText?: TextProps['children'];
  containerStyle?: TouchableOpacityProps['style'];
  disabledStyle?: TouchableOpacityProps['style'];
  disabledTextStyle?: TextProps['style'];
  isDisabled?: TouchableOpacityProps['disabled'];
  onPress?: TouchableOpacityProps['onPress'];
  textStyle?: TextProps['style'];
  Icon?: React.FC<SvgProps>;
};

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const {
    Icon = null,
    buttonText,
    containerStyle,
    disabledStyle,
    disabledTextStyle,
    isDisabled,
    onPress,
    textStyle,
  } = props;

  const customButtonStyles = getCustomButtonStyles();

  return (
    <TouchableOpacity
      accessibilityRole={'button'}
      onPress={onPress}
      style={[
        customButtonStyles.container,
        containerStyle,
        isDisabled && disabledStyle,
        isDisabled && !disabledStyle && customButtonStyles.disabledStyle,
      ]}
      disabled={isDisabled}
    >
      <View style={customButtonStyles.wrapper}>
        {Icon && <Icon />}
        <Text
          style={[
            customButtonStyles.buttonText,
            textStyle,
            isDisabled && disabledTextStyle,
            isDisabled && !disabledTextStyle && customButtonStyles.disabledText,
          ]}
        >
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
