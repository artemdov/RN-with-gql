import React, { useState } from 'react';
import { SignInView } from './SingInView';

import { storage } from '../../storage';
import { client, loginQuery } from '../../api';

export const SignInScreen = () => {

  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInputSecureTextEntry, setIsInputSecureTextEntry] = useState(true);
  const [isError, setIsError] = useState<boolean | string>(false);

  const toggleVisiblePass = () => {
    setIsInputSecureTextEntry(!isInputSecureTextEntry);
  };


  const onChangeEmail = (newEmail: string) => {
    setEmail(newEmail);
    setIsDisabled(false);
    setIsError(false);
  };

  const onChangePassword = (newPassword: string) => {
    setPassword(newPassword);
    setIsDisabled(false);
    setIsError(false);
  };


  const onPressSignIn = async () => {
    try {

      const response = await client.query({
        query: loginQuery,
        variables: {
          login: email,
          password: password,
        },
      });

      const loginResult = response.data.login;

      if (loginResult.__typename === 'TokenPair') {
        const { accessToken, refreshToken } = loginResult;

        await storage.setItem('accessToken', accessToken);
        await storage.setItem('refreshToken', refreshToken);
      } else {
        setIsError(loginResult.status);
      }

    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <SignInView
      authError={isError}
      email={email}
      isDisabled={isDisabled}
      isError={!!isError}
      isInputSecureTextEntry={isInputSecureTextEntry}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onPressSignIn={onPressSignIn}
      password={password}
      setIsInputSecureTextEntry={toggleVisiblePass}
    />
  );
};
