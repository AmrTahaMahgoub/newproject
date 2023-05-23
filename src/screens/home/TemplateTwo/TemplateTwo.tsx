import React from 'react';
import {FlatList, View} from 'react-native';
import Text from '../../../components/atoms/Text/Text';
import Header from '../../../components/molecules/Header/Header';
import {getHeight, getWidth} from '../../../styles/dimensions';
import {Input} from '../../../components/atoms/Input/Input';
import AdverListWithDate from '../../../components/organisms/AdverList/AdverListWithDate';
import {AdverListImagesWithDate, FeaturesAndAnalysisData} from '../../../redux/api/api';
import {Button, ViewRow} from '../../../components/atoms';
import Svgs from '../../../assets/svgs';
import TextwithTextIcon from '../../../components/molecules/TextWithIcon/TextWithTextIcon';
import FeaturesAndAnalysis from '../../../components/organisms/FeaturesAndAnalysis/FeaturesAndAnalysis';

function TemplateTwo() {
  const AdverListWithDateItem = ({item}: any) => (
    <AdverListWithDate item={item} />
  
  );
  const FeaturesAndAnalysisItem = ({item}: any) => (
    <FeaturesAndAnalysis item={item} />
  );
  return (
    <View
      style={{
        marginTop: getHeight(24),
        marginHorizontal: getWidth(16),
        flexDirection: 'column',
      }}>
      <Header title={'HOME'} type="Notifications"></Header>

      <Input placeholder="Search" label="Search" icon="Search" />
      <Text fontSize="FS14" style={{textAlign: 'left'}}>
        {'Discover'}
      </Text>
      <FlatList
        data={AdverListImagesWithDate}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={AdverListWithDateItem}
      />
      {/* <ViewRow style={{ justifyContent:"space-between", width:getWidth(345)}}>
        <Text fontSize="FS14">{'Features & Analysis'}</Text>
        <Button>
          <View style={{width:getWidth(50),flexDirection:"row", justifyContent:"space-between"}} >
            <Text fontSize="FS12" color='WHITE_A8A8A8'>{'More'}</Text>
            <Svgs name="RightArrow" width={getWidth(10)} ></Svgs>
          </View>
        </Button>
      </ViewRow> */}
        {/* <ViewRow style={{ justifyContent:"space-between", width:getWidth(345)}}>
        <Text fontSize="FS14">{'Features & Analysis'}</Text>
        <Button>
          <View style={{width:getWidth(50),flexDirection:"row", justifyContent:"space-between"}} >
            <Text fontSize="FS12" color='WHITE_A8A8A8'>{'More'}</Text>
            <Svgs name="RightArrow" width={getWidth(10)} ></Svgs>
          </View>
        </Button>
      </ViewRow> */}
      <TextwithTextIcon maintitle='Features & Analysis' title='More' icon='RightArrow'></TextwithTextIcon>
      <FlatList
        data={FeaturesAndAnalysisData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={FeaturesAndAnalysisItem}
      />
    </View>
  );
}
export default TemplateTwo;
