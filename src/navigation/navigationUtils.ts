import {
  DrawerActions,
  StackActions,
  createNavigationContainerRef,
  type NavigationHelpers,
} from '@react-navigation/native';
import { AuthNativeStackNavigatorParamList } from './AuthNativeStackNavigator/types';

export const navigationRef = createNavigationContainerRef();

export type Navigate = (
  ...args: Parameters<NavigationHelpers<AuthNativeStackNavigatorParamList>['navigate']>
) => void;

export type Reset = (
  ...args: Parameters<NavigationHelpers<AuthNativeStackNavigatorParamList>['reset']>
) => void;

export const navigate: Navigate = (...args) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(...args);
  }
};

export const reset: Reset = (...args) => {
  if (navigationRef.isReady()) {
    navigationRef.reset(...args);
  }
};

export type GoBack = () => void;

export const goBack: GoBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export type DrawerJumpTo = (...args: Parameters<typeof DrawerActions.jumpTo>) => void;

export const drawerJumpTo: DrawerJumpTo = (...args) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.jumpTo(...args));
  }
};

export type DrawerOpenDrawer = () => void;

export const drawerOpenDrawer: DrawerOpenDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export type StackPopToTop = () => void;

export const stackPopToTop: StackPopToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

export type StackPush = (...args: Parameters<typeof StackActions.push>) => void;

export const stackPush: StackPush = (...args) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(...args));
  }
};
