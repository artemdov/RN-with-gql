import { StyleSheet, TextStyle } from 'react-native';

export type ErrorTextStyles = {
  errorTextStyle: TextStyle;
};

export const errorTextStyles = StyleSheet.create<ErrorTextStyles>({
  errorTextStyle: {
    alignItems: 'center',
    color: 'red',
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'normal',
    width: '70%',
    textAlign: 'right'
  },
});
