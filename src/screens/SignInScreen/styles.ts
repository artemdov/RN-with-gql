import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';


type SignInScreenStyles = {
  buttonStyle: ViewStyle;
  devButtons: ViewStyle;
  forgotButton: ViewStyle;
  forgotButtonText: TextStyle;
  labelStyle: TextStyle;
  rootContainer: ViewStyle;
  socialMediaWrapper: ViewStyle;
  titleText: TextStyle;
  wrapperContainer: ViewStyle;
  wrapperInput: ViewStyle;
};

export const signInScreenStyles = StyleSheet.create<SignInScreenStyles>({
  rootContainer: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingHorizontal: 14,
  },
  labelStyle: {
    marginTop: 20,
  },
  devButtons: {
    position: 'absolute',
    start: 0,
  },
  forgotButton: {
    textAlign: 'center',
    marginTop: 10,
  },
  forgotButtonText: {
    textAlign: 'center',
  },
  wrapperContainer: {
    alignItems: 'center',
    marginTop: 100,
    width: '100%',
  },
  buttonStyle: {
    marginTop: 24,
  },
  wrapperInput: {
    marginTop: 80,
    width: '100%',
  },
  titleText: {
    textAlign: 'center',
  },
  socialMediaWrapper: {
    marginTop: 90,
  },
});
