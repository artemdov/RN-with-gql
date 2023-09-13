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


import { startDrawText } from '../../constants/texts';
import { Chip } from '../../components/Chip';
import { COLORS } from '../../constants/colors';


export const HomeScreenView: FC<HomeScreenViewProps> = (props) => {
  const { height, width, containerStyles, textStyles } = props;

  return <View style={homeScreenStyles.rootContainer}>
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

      {/*<MacIcon />*/}
      {/*<PhoneIcon />*/}
      {/*<MicroPhonesIcon />*/}
    </View>
  </View>;


};
