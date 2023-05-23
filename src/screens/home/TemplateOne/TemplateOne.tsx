import React, {useState} from 'react';
import {Dimensions, FlatList, Image, SectionList, View} from 'react-native';
import AdverList from '../../../components/organisms/AdverList/AdverList';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Header} from '../../../components/molecules';
import {DATA, Section, AdverListImages} from '../../../redux/api/api';
import AdverListItem from '../../../components/organisms/AdverList/AdverList';
import Text from '../../../components/atoms/Text/Text';
import styles from './styles';
import EducationAndHealthItem from '../../../components/organisms/EducationAndHealth/EducationAndHealth';
import {Colors, Spacing} from '../../../styles';
import SnapCarousel from '../../../components/organisms/AdverList/SnapCarousel';

const TemplateOne = () => {
  const RenderEducationAndHealth = ({item}: any) => (
    <EducationAndHealthItem item={item} />
  );
  // "@react-navigation/native": "^6.1.6",
  // "@react-navigation/native-stack": "^6.9.12",
  // "@react-navigation/stack": "^6.3.16",

  return (
    <>
      <View style={{marginHorizontal: getWidth(16)}}>
        <View style={{marginVertical: Spacing.S35}}>
          <Header type={'Search'} title={'HOME'}   ></Header>
        </View>
        <SnapCarousel data={AdverListImages} />

        <View style={styles.text}>
          <Text fontFamily="MEDIUMROBOTO" fontSize="FS12" color="GRAY_F5F5F5">
            {
              'Holding the fifteenth meeting of the Board of Directors Enterprise'
            }
          </Text>
        </View>
      </View>
      <View style={{marginTop: Spacing.S20,marginLeft:getWidth(16)}}>
        <Text
          fontFamily="MEDIUMROBOTO"
          fontSize="FS18"
          style={{textAlign: 'left', marginBottom: Spacing.S8}}>
          {"Education"}
        </Text>
        <FlatList
          data={DATA}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={RenderEducationAndHealth}
        />
      </View>
      <View style={{marginTop: Spacing.S35, marginLeft:getWidth(16)}}>
        <Text
          fontFamily="MEDIUMROBOTO"
          fontSize="FS18"
          style={{textAlign: 'left', marginBottom: Spacing.S16}}>
          {"Health"}
        </Text>
        <FlatList
          data={DATA}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={RenderEducationAndHealth}
        />
      </View>
    </>
  );
};

export default TemplateOne;
