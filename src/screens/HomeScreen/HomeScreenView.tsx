import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { homeScreenStyles } from './styles';
import { HomeScreenViewProps } from './types';
import Title from '../../assets/SecondTilte.svg';
import QuestionIcon from '../../assets/Question.svg';
import MacIcon from '../../assets/firstRectangle.svg';
import PhoneIcon from '../../assets/secondRectangle.svg';
import MicroPhonesIcon from '../../assets/thirdRectangle.svg';
import Separator from '../../assets/Separator.svg';
import {
  macText,
  microPhoneText,
  participateText,
  phoneText,
  startDrawText,
  startDrawTodayText,
} from '../../constants/texts';
import { Chip } from '../../components/Chip';
import { NotificationComponent } from '../../components/NotificationComponent';
import { CustomButton } from '../../components/CustomButton';


export const HomeScreenView: FC<HomeScreenViewProps> = (props) => {
  const { height, width, containerStyles, textStyles } = props;

  return (
    <View style={homeScreenStyles.rootContainer}>
      <View style={[homeScreenStyles.firstWrapper, { width, height }]} />
      <View style={[homeScreenStyles.secondWrapper, { width, height }]} />
      <View style={homeScreenStyles.content}>
        <Title />
        <View style={homeScreenStyles.drawWrapper}>
          <Text style={homeScreenStyles.text}>{startDrawText}</Text>
          <QuestionIcon />
        </View>
        <View style={homeScreenStyles.chipWrapper}>
          <Chip text={'0'} />
          <Chip text={'0'} />
          <Separator style={homeScreenStyles.separator} />
          <Chip textStyles={textStyles} containerStyles={containerStyles} text={'3'} />
          <Chip textStyles={textStyles} containerStyles={containerStyles} text={'5'} />
        </View>
        <View style={homeScreenStyles.drawWrapper}>
          <Text style={homeScreenStyles.text}>{startDrawTodayText}</Text>
          <QuestionIcon />
        </View>
        <View style={homeScreenStyles.contentWrapper}>
          <View>
            <MacIcon style={homeScreenStyles.contentContainer} />
            <NotificationComponent notificationsCount={3} />
            <Text style={homeScreenStyles.text}>{macText}</Text>
          </View>
          <View>
            <PhoneIcon style={homeScreenStyles.contentContainer} />
            <NotificationComponent countWrapperStyles={{ left: 86 }} notificationsCount={1} />
            <Text style={homeScreenStyles.text}>{phoneText}</Text>
          </View>
          <View>
            <MicroPhonesIcon style={homeScreenStyles.contentContainer} />
            <NotificationComponent countWrapperStyles={{ right: 12 }} notificationsCount={12} />
            <Text style={homeScreenStyles.text}>{microPhoneText}</Text>
          </View>
        </View>
        <CustomButton buttonText={participateText} />
      </View>
    </View>);


};
