import React from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import Text from '../../../components/atoms/Text/Text';
import Header from '../../../components/molecules/Header/Header';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Input} from '../../../components/atoms/Input/Input';
import AdverListWithDate from '../../../components/organisms/AdverList/AdverListWithDate';
import {
  AdverListImagesWithDate,
  CategoriesData,
  FeaturesAndAnalysisData,
  SponsersData,
} from '../../../redux/api/api';
import {Button, ViewRow} from '../../../components/atoms';
import Svgs from '../../../assets/svgs';
import TextwithTextIcon from '../../../components/molecules/TextWithIcon/TextWithTextIcon';
import FeaturesAndAnalysis from '../../../components/organisms/FeaturesAndAnalysis/FeaturesAndAnalysis';
import CategoriesItem from '../../../components/organisms/Categories/Categories';
import SponsersItem from '../../../components/organisms/Sponsers/Sponsers';
import {Colors, Spacing} from '../../../styles';

function TemplateTwo() {
  const RenderAdverListWithDateItem = ({item}: any) => (
    <AdverListWithDate item={item} />
  );
  const RenderFeaturesAndAnalysisItem = ({item}: any) => (
    <FeaturesAndAnalysis item={item} />
  );
  const RenderCategoriesItem = ({item}: any) => <CategoriesItem item={item} />;
  const RenderSponserItem = ({item}: any) => <SponsersItem item={item} />;
  return (
    <View
      style={{
        marginTop: getHeight(16),
        marginHorizontal: getWidth(16),
        flexDirection: 'column',
      }}>
      <View
      //style={{marginBottom: Spacing.S16}}
      >
        <Header title={'HOME'} type="Notifications"></Header>
      </View>

      <View style={{height: '98%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: '100%'}}>
            <View style={{marginBottom: Spacing.S30}}>
              <Input
                placeholder="Search"
                // label="Search"
                icon="Search"
                styleContainer={{
                  borderRadius:scale(12),
                  backgroundColor: Colors.WHITE,
                  height: getHeight(64),
                  width: getWidth(343),
                  paddingHorizontal: getWidth(18),
                }}
                styleInputContainer={{
                  // paddingHorizontal: getWidth(18),
                  height: getHeight(64),
                  width: getWidth(295),
                }}
              />
            </View>
            <View style={{marginBottom: Spacing.S20}}>
              <Text fontSize="FS14" style={{textAlign: 'left'}}>
                {'Discover'}
              </Text>
            </View>
            <FlatList
              data={AdverListImagesWithDate}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={RenderAdverListWithDateItem}
            />

            <TextwithTextIcon
              maintitle="Features & Analysis"
              title="More"
              icon="RightArrow"></TextwithTextIcon>
            <FlatList
              data={FeaturesAndAnalysisData}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={RenderFeaturesAndAnalysisItem}
            />
            <TextwithTextIcon
              maintitle="Category"
              title="More"
              icon="RightArrow"></TextwithTextIcon>
            <FlatList
              data={CategoriesData}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={RenderCategoriesItem}
            />
            <TextwithTextIcon
              maintitle="Sponser"
              title="More"
              icon="RightArrow"></TextwithTextIcon>
            <FlatList
              data={SponsersData}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={RenderSponserItem}
            />
          </View>
          {/* <TextwithTextIcon maintitle='Sponser' title='More' icon='RightArrow'></TextwithTextIcon> */}
        </ScrollView>
      </View>
    </View>
  );
}
export default TemplateTwo;
