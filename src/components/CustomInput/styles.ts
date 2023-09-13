import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type CustomInputWithLabelStyles = {
  error: ViewStyle;
  errorWrapper: ViewStyle;
  eye: ViewStyle;
  input: ViewStyle;
  inputContainer: ViewStyle;
  labelText: TextStyle;
  rootContainer: ViewStyle;
  wrapperInput: ViewStyle;
};

export const customInputWithLabelStyles = StyleSheet.create<CustomInputWithLabelStyles>({
  rootContainer: {},
  errorWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  },
});
