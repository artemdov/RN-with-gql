import React, { FC } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { customInputWithLabelStyles } from './styles';
import EyeOpen from '../../assets/EyeOpen.svg';
import EyeClosed from '../../assets/EyeClosed.svg';
import { CustomInputProps } from './types';
import { ErrorText } from '../ErrorText';


export const CustomInput: FC<TextInputProps & CustomInputProps> = (props) => {
  const {
    InputIcon,
    errorText,
    eyeStyles,
    inputContainerStyles,
    inputStyles,
    isError,
    isPasswordSecure = false,
    label,
    labelTextStyles,
    onBlur,
    onChangeText,
    onFocus,
    placeholderText,
    rootContainerStyles,
    secureTextEntry,
    setIsInputSecureTextEntryOnPress,
    wrapperInputStyles,
    value,
  } = props;

  return (
    <View style={[customInputWithLabelStyles.rootContainer, rootContainerStyles]}>
      <View style={customInputWithLabelStyles.errorWrapper}>
        <Text style={[customInputWithLabelStyles.labelText, labelTextStyles]}>{label}</Text>
        {isError && <ErrorText errorText={errorText} />}
      </View>
      <View
        style={[
          customInputWithLabelStyles.inputContainer,
          inputContainerStyles,
          isError && customInputWithLabelStyles.error,
        ]}
      >
        <View style={[customInputWithLabelStyles.wrapperInput, wrapperInputStyles]}>
          {InputIcon && <InputIcon />}
          <TextInput
            accessibilityLabel={'Text input field'}
            onBlur={onBlur}
            onChangeText={onChangeText}
            onFocus={onFocus}
            placeholder={placeholderText}
            placeholderTextColor={'#3C3C434D'}
            secureTextEntry={secureTextEntry}
            style={[customInputWithLabelStyles.input, inputStyles]}
            textAlign={'left'}
            value={value}
          />
        </View>
        {isPasswordSecure && (
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={setIsInputSecureTextEntryOnPress}
            style={[customInputWithLabelStyles.eye, eyeStyles]}
          >
            {secureTextEntry ? <EyeClosed stroke={'#3C3C434D'} /> : <EyeOpen fill={'#3C3C434D'} />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
