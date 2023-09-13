import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/colors';


type HomeScreenStyles = {
  button: ViewStyle;
  chipItem: ViewStyle;
  chipWrapper: ViewStyle;
  content: ViewStyle;
  contentContainer: ViewStyle
  contentWrapper: ViewStyle;
  drawWrapper: ViewStyle;
  firstWrapper: ViewStyle;
  rootContainer: ViewStyle;
  secondWrapper: ViewStyle;
  separator: ViewStyle;
  text: TextStyle;
};

export const homeScreenStyles = StyleSheet.create<HomeScreenStyles>({
  rootContainer: {
    backgroundColor: COLORS.DARK_GRAY,
    flex: 1,
    paddingTop: 80,
  },
  secondWrapper: {
    backgroundColor: COLORS.DARK_GRAY,
    position: 'absolute',
    bottom: 80,
    right: 170,
    transform: [{ rotate: '35deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstWrapper: {
    backgroundColor: COLORS.VIOLET,
    position: 'absolute',
    top: 80,
    left: 140,
    transform: [{ rotate: '35deg' }],
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
    textAlign: 'center',
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
    marginBottom: 5,
  },
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 100,
    marginStart: 20,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
