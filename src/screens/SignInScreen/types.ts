import { TextInputProps, ViewProps } from 'react-native';
import { CustomInputProps } from '../../components/CustomInput/types';
import { CustomButtonProps } from '../../components/CustomButton';

export type SignInViewProps = {
  authError?: string | boolean;
  email?: TextInputProps['value'];
  goToPasswordRecoveryScreen?: CustomButtonProps['onPress'];
  isDisabled?: CustomButtonProps['isDisabled'];
  isError?: boolean;
  isInputSecureTextEntry?: boolean;
  onChangeEmail?: CustomInputProps['onChangeText'];
  onChangePassword?: CustomInputProps['onChangeText'];
  onPressSignIn?: CustomButtonProps['onPress'];
  password?: TextInputProps['value'];
  setIsInputSecureTextEntry?: CustomInputProps['setIsInputSecureTextEntryOnPress'];
};
