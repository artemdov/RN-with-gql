import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';


type HomeScreenStyles = {

  rootContainer: ViewStyle;

};

export const homeScreenStyles = StyleSheet.create<HomeScreenStyles>({
  rootContainer: {
    backgroundColor: COLORS.DARK_GRAY,
    flex: 1,
    paddingHorizontal: 14,
  },

});
