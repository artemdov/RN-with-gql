import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';

export type CustomButtonStyles = {
  buttonText: TextStyle;
  container: ViewStyle;
  disabledStyle: ViewStyle;
  disabledText: TextStyle;
  wrapper: ViewStyle;
};

export const getCustomButtonStyles = () => {
  return StyleSheet.create<CustomButtonStyles>({
    buttonText: {
      color: COLORS.WHITE,
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 24,
    },
    container: {
      backgroundColor: COLORS.PURPLE,
      alignItems: 'center',
      borderRadius: 20,
      height: 48,
      justifyContent: 'center',
    },
    disabledStyle: {
      backgroundColor: COLORS.GRAY,
    },
    disabledText: {
      color: 'gray',
    },
    wrapper: {
      flexDirection: 'row',
    },
  });
};
