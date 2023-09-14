import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { signInScreenStyles } from './styles';
import { SignInViewProps } from './types';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import Title from '../../assets/Title.svg';
import SocialButton from '../../assets/SocialMediaButton.svg';
import SocialNextButton from '../../assets/SocialMediaNextButton.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { buttonEnterText, forgotPasswordText, loginText, passwordText } from '../../constants/texts';
import { EMPTY_FUNCTION, EMPTY_STRING } from '../../constants/fallbacks';


export const SignInView: FC<SignInViewProps> = (props) => {
  const {
    authError = EMPTY_STRING,
    email = EMPTY_STRING,
    isError = false,
    isInputSecureTextEntry = false,
    onChangeEmail = EMPTY_FUNCTION,
    onChangePassword = EMPTY_FUNCTION,
    onPressSignIn = EMPTY_FUNCTION,
    password = EMPTY_STRING,
    setIsInputSecureTextEntry = EMPTY_FUNCTION,
  } = props;

  return (
    <View style={signInScreenStyles.rootContainer}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={signInScreenStyles.wrapperContainer}>
          <Title />
          <View style={signInScreenStyles.wrapperInput}>
            <Text style={signInScreenStyles.titleText}>{buttonEnterText}</Text>
            <CustomInput
              onChangeText={onChangeEmail}
              placeholderText={loginText}
              value={email}
            />
            <CustomInput
              isError={isError}
              errorText={authError}
              isPasswordSecure={true}
              onChangeText={onChangePassword}
              placeholderText={passwordText}
              secureTextEntry={isInputSecureTextEntry}
              setIsInputSecureTextEntryOnPress={setIsInputSecureTextEntry}
              value={password}
            />
            <CustomButton
              buttonText={buttonEnterText}
              containerStyle={signInScreenStyles.buttonStyle}
              isDisabled={isError}
              onPress={onPressSignIn}
            />
          </View>
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={EMPTY_FUNCTION}
            style={signInScreenStyles.forgotButton}
          >
            <Text style={signInScreenStyles.forgotButtonText}>{forgotPasswordText}</Text>
          </TouchableOpacity>
          <View style={signInScreenStyles.socialMediaWrapper}>
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={EMPTY_FUNCTION}
              style={signInScreenStyles.forgotButton}
            >
              <SocialButton />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole={'button'}
              onPress={EMPTY_FUNCTION}
              style={signInScreenStyles.forgotButton}
            >
              <SocialNextButton />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
