import React from 'react';
import {FlatList, View} from 'react-native';
import Text from '../../../components/atoms/Text/Text';
import {Colors, Spacing} from '../../../styles';
import {Header} from '../../../components/molecules';
import {Input} from '../../../components/atoms/Input/Input';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import AdverListTEmp4Item from '../../../components/organisms/AdverList/AdverListTemp4';
import {AdverListTemp4Data, CategoriesTemp4Data, PopularTemp4Data, WorldsTemp4Data} from '../../../redux/api/api';
import PopularTemp4Item from '../../../components/organisms/Popular/PopularTemp4';
import {Line} from '../../../components/atoms';
import TextwithTextIcon from '../../../components/molecules/TextWithIcon/TextWithTextIcon';
import CategoriesTemp4Item from '../../../components/organisms/Categories/CategoriesTemp4';
import { ScrollView } from 'react-native-gesture-handler';
import WorldsTemp4Item from '../../../components/organisms/Worlds/WorldsTemp4';

function Template4() {
  const RenderAdverListTemp4Item = ({item}: any) => (
    <AdverListTEmp4Item item={item} />
  );
  //PopularTemp4Item
  const RenderPopularTemp4ItemItem = ({item}: any) => (
    <PopularTemp4Item item={item} />
  );
  //CategoriesTemp4Item
  const RenderCategoriesTemp4Item = ({item}: any) => (
    <CategoriesTemp4Item item={item} />
  );
  //WorldsTemp4Item
  const RenderWorldsTemp4Item = ({item}: any) => (
    <WorldsTemp4Item item={item} />
  );
  return (
    <View style={{marginVertical: Spacing.S16}}>
      <View style={{marginHorizontal: Spacing.S16}}>
        <Header type="Search" title={'HOME'}></Header>
      </View>
   <View style={{height:"95%",marginVertical:getHeight(16)}}>
   <ScrollView style={{height:"100%" , }}>
   <View style={{height:"100%", 
  // backgroundColor:"white"
   }}>
   <View style={{marginBottom: Spacing.S27}}>
        <Input
          placeholder="Type book name or author"
          // label="Search"
          icon="Search"
          styleContainer={{
            backgroundColor: Colors.WHITE_FBFBFB,
            height: getHeight(43),
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
      <View>
        <FlatList
          data={AdverListTemp4Data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={RenderAdverListTemp4Item}
        />
      </View>
      <View style={{marginTop: Spacing.S11}}>
        <Text fontSize="FS14" style={{textAlign: 'left'}}>
          {'Popular'}
        </Text>
      </View>
      <View>
        <FlatList
          data={PopularTemp4Data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={RenderPopularTemp4ItemItem}
        />
      </View>
      <Line />
      <TextwithTextIcon
        // maintitle="Category"
        title="See All"
        icon="RightArrow"></TextwithTextIcon>
      <View style={{backgroundColor: Colors.WHITE, height: getHeight(277)}}>
        <View style={{marginTop: Spacing.S11}}>
          <Text fontSize="FS14" style={{textAlign: 'left'}}>
            {'Browrse Categories'}
          </Text>
        </View>
        <View style={{paddingHorizontal:getWidth(16)}}>
        <FlatList
          data={CategoriesTemp4Data}
          scrollEnabled={false}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={RenderCategoriesTemp4Item}
        />
      </View>
    
      </View>
      <Line />
      <TextwithTextIcon
        // maintitle="Category"
        title="See All"
        icon="RightArrow"></TextwithTextIcon>
         <View style={{marginTop: Spacing.S11}}>
          <Text fontSize="FS14" style={{textAlign: 'left'}}>
            {'Worlds'}
          </Text>
        </View>
        <View>
        <FlatList
          data={WorldsTemp4Data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={RenderWorldsTemp4Item}
        />
      </View>
      <Line />
      <TextwithTextIcon
        // maintitle="Category"
        title="See All"
        icon="RightArrow"></TextwithTextIcon>
   </View>
    </ScrollView>
   </View>
    </View>
  );
}
export default Template4;
