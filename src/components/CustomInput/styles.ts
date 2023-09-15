import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';

export type CustomInputWithLabelStyles = {
  error: ViewStyle;
  eye: ViewStyle;
  input: ViewStyle;
  inputContainer: ViewStyle;
  labelText: TextStyle;
  wrapperInput: ViewStyle;
};

export const customInputWithLabelStyles = StyleSheet.create<CustomInputWithLabelStyles>({

  wrapperInput: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 2,
  },
  labelText: {
    color: 'gray',
    fontWeight: '500',
    marginBottom: 6,
  },
  inputContainer: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    height: 44,
    width: '100%',
    backgroundColor: '#F2F2F7',
  },
  input: {
    fontSize: 17,
    fontWeight: '400',
    marginStart: 8,
    padding: 10,
    width: '90%',
    color: '#3C3C43'
  },
  eye: {
    padding: 8,
    position: 'absolute',
    right: '0%',
    zIndex: 99,
  },
  error: {
    borderWidth: 1,
    borderColor: COLORS.RED_ERROR,
  },
});
