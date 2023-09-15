import React, { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';

import { notificationsStyles } from './styles';

export type NotificationComponentProps = {
  notificationsCount?: number;
  countWrapperStyles?: ViewStyle
};

export const NotificationComponent: FC<NotificationComponentProps> = (props) => {
  const { notificationsCount = 0 , countWrapperStyles} = props;

  return (
    <View style={[notificationsStyles.countWrapper, countWrapperStyles]}>
      <Text style={notificationsStyles.count}>{notificationsCount}</Text>
    </View>

  );
};
