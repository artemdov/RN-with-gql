import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';

export type NotificationsStyles = {
  count: TextStyle;
  countWrapper: ViewStyle;
};

export const notificationsStyles = StyleSheet.create<NotificationsStyles>({
  countWrapper: {
    alignItems: 'center',
    backgroundColor: COLORS.PURPLE,
    borderRadius: 10,
    height: 19,
    justifyContent: 'center',
    position: 'absolute',
    right: 8,
    top: -8,
    width: 20,
    zIndex: 1
  },
  count: {
    color: COLORS.WHITE,
    fontSize: 12,
  },
});
