import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';


type ChipStyle = {
  container: ViewStyle;
  text: TextStyle;
};

export const chipStyle = StyleSheet.create<ChipStyle>({
  container: {
    backgroundColor: COLORS.WHITE,
    width: 70,
    height: 106,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  text: {
    color: COLORS.DARK_GRAY,
    fontSize: 36,
    fontWeight: '600',
  },

});
