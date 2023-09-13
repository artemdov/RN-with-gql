import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';


type HomeScreenStyles = {
  firstWrapper: ViewStyle;
  secondWrapper: ViewStyle;
  rootContainer: ViewStyle;
  content: ViewStyle;
  text: TextStyle;
  drawWrapper: ViewStyle;
  chipWrapper: ViewStyle;
  separator: ViewStyle;
  chipItem: ViewStyle;
  contentContainer: ViewStyle
  contentWrapper: ViewStyle;
};

export const homeScreenStyles = StyleSheet.create<HomeScreenStyles>({
  rootContainer: {
    flex: 1,
  },
  secondWrapper: {
    backgroundColor: COLORS.DARK_GRAY,
    position: 'absolute',
    bottom: 100,
    right: 60,
    transform: [{ rotate: '45deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstWrapper: {
    backgroundColor: COLORS.VIOLET,
    position: 'absolute',
    top: 100,
    left: 60,
    transform: [{ rotate: '45deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: '600',
    marginEnd: 22,
  },
  drawWrapper: {
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginHorizontal: 6,
  },
  chipItem: {
    backgroundColor: COLORS.PURPLE,
  },
  contentContainer: {
    marginEnd: 20,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
});
