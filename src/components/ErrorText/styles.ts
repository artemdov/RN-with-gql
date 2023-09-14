import { StyleSheet, TextStyle } from 'react-native';

export type ErrorTextStyles = {
  errorTextStyle: TextStyle;
};

export const errorTextStyles = StyleSheet.create<ErrorTextStyles>({
  errorTextStyle: {
    alignItems: 'center',
    color: 'red',
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 18,
    paddingVertical: 4,
    textAlign: 'left',
    width: '100%',
  },
});
