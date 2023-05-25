import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import Text from '../../../components/atoms/Text/Text';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Header} from '../../../components/molecules';
import UsersItem from '../../../components/organisms/Users/Users';
import {
  CategoriesTemp3Data,
  PopularTemp3Data,
  SponsersData,
  SponsersDataType,
  UsersData,
  WorldsData,
} from '../../../redux/api/api';
import {Colors, Spacing} from '../../../styles';
import {Input} from '../../../components/atoms/Input/Input';
import {Button} from '../../../components/atoms';
import Svgs from '../../../assets/svgs';
import CategoriesTemp3Item from '../../../components/organisms/Categories/CategoriesTemp3';
import PopularTemp3Item from '../../../components/organisms/Popular/PopularTemp3';
import WorldsItem from '../../../components/organisms/Worlds/Worlds';

function TemplateThree() {
  const RenderUsersItem = ({item}: any) => <UsersItem item={item} />;
  const RenderCategoriesTemp3Item = ({item}: any) => (
    <CategoriesTemp3Item item={item} />
  );
  const RenderPopularItem = ({item}: any) => <PopularTemp3Item item={item} />;
  const RenderWorldsItem = ({item}: any) => <WorldsItem item={item} />;
  //WorldsItem
  //PopularItem
  return (
    <View
      style={{
        margin: scale(16),
      }}>
      <View style={{marginBottom: Spacing.S27}}>
        <Header title={'HOME'} type="Search"></Header>
      </View>
      
       
          <View style={{height: '100%'}}>
            <View style={{height: '7%'}}>
              <FlatList
                scrollEnabled={false}
                data={UsersData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={RenderUsersItem}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: getWidth(343),
                //backgroundColor: 'gray',
              }}>
              <Input
                withBackIconColor={true}
                placeholder="Search"
                styleContainer={{
                  height: getHeight(40),
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-start',
                }}
                styleInputContainer={{
                  borderColor: Colors.GRAY_00000029,
                  borderWidth: 1,
                  paddingHorizontal: getWidth(18),

                  width: getWidth(250),
                  borderTopLeftRadius: scale(9),
                  borderBottomLeftRadius: scale(9),
                }}
              />
              <Button>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',

                    alignSelf: 'flex-end',
                    alignItems: 'flex-end',

                    height: getHeight(40),
                    width: getWidth(50),
                  }}>
                  <Svgs
                    name="Filter"
                    color={'black'}
                    height={24}
                    width={24}></Svgs>
                </View>
              </Button>
            </View>
            <View style={{height: '12%'}}>
              <FlatList
                // scrollEnabled={false}
                data={CategoriesTemp3Data}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={RenderCategoriesTemp3Item}
              />
            </View>
            <View style={{marginBottom: Spacing.S11}}>
              <Text fontSize="FS14" style={{textAlign: 'left'}}>
                {'Popular'}
              </Text>
            </View>
            
            <View style={{height: '38%'}}>
              <FlatList
               // columnWrapperStyle={{height: '38%'}}
                // numColumns={3}
                scrollEnabled={true}
                data={PopularTemp3Data}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                renderItem={RenderPopularItem}
              />
              
            </View>
            <View style={{marginBottom: Spacing.S11}}>
              <Text fontSize="FS14" style={{textAlign: 'left'}}>
                {'Worlds'}
              </Text>
            </View>
            <View style={{height: '20%'}}>
              <FlatList
                //scrollEnabled={false}
                data={WorldsData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={RenderWorldsItem}
              />
            </View>
          </View>
     
   
    </View>
  );
}
export default TemplateThree;
