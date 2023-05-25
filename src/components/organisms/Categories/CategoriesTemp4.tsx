import React from 'react';
import {Image} from '../../atoms/Image/Image';
import {
  CategoriesDataType,
  CategoriesTemp3DataType,
  CategoriesTemp4DataType,
} from '../../../redux/api/api';
import {View} from 'react-native';
import Text from '../../atoms/Text/Text';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Colors, Spacing} from '../../../styles';
import {ViewRow} from '../../atoms';

const CategoriesTemp4Item = ({item}: {item: CategoriesTemp4DataType}) => {
  return (
    <ViewRow
      style={{
        height: getHeight(213),

        // width: getWidth(360),
        marginHorizontal: Spacing.S4,
        justifyContent: 'space-between',
        alignItems: 'center',
        // alignContent: 'flex-start',
        //  backgroundColor: Colors.PRIMARY1,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'column',
          height: getHeight(213),
          width: getWidth(128),
          // backgroundColor: 'yellow',
          marginRight: Spacing.S8,
          // borderRadius:scale(8)
        }}>
        <View
          style={{
            backgroundColor: Colors.SEMIWHITE_F9F9F9,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: getHeight(188),
            width: getWidth(128),
            borderRadius: scale(10),
          }}>
          <Image
            source={item.image1}
            style={{width: getWidth(44), height: getHeight(44)}}></Image>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            height: getHeight(25),
            width: getWidth(128),
            //  marginBottom: Spacing.S16,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            // borderStartColor:"blue"
          }}>
          <Text>{item.title1}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          marginRight: Spacing.S8,
          height: getHeight(293),
          width: getWidth(71),
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            backgroundColor: Colors.SEMIWHITE_F9F9F9,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: getHeight(188),
            width: getWidth(71),
            borderRadius: scale(10),
          }}>
          <Image
            source={item.image2}
            style={{width: getWidth(44), height: getHeight(44)}}></Image>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            height: getHeight(25),
            width: getWidth(71),
            //  marginBottom: Spacing.S16,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{item.title2}</Text>
        </View>
      </View>
      <View
        style={
          {
            // marginRight:Spacing.S8,
            //     backgroundColor:"black",
            //   justifyContent: 'center',
            //   alignContent: 'center',
            //   alignItems: 'center',
            //   height: getHeight(193),
            //   width: getWidth(128),
          }
        }>
        <View
          style={{
           // backgroundColor: 'red',
            height: getHeight(102),
            width: getWidth(128),
            marginBottom: Spacing.S16,
          }}>
          <View
            style={{
              backgroundColor: Colors.SEMIWHITE_F9F9F9,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              height: getHeight(79),
              borderRadius: scale(10),
              //   width: getWidth(128),
            }}>
            <Image
              source={item.image3}
              style={{width: getWidth(44), height: getHeight(44)}}></Image>
          </View>

          <View
            style={{
                backgroundColor: Colors.WHITE,
              height: getHeight(25),
              width: getWidth(128),
              //  marginBottom: Spacing.S16,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{item.title3}</Text>
          </View>
        </View>
        <View
          style={{
           // backgroundColor: 'gray',
            height: getHeight(95),
            width: getWidth(128),
           
            // marginBottom: Spacing.S8,
          }}>
          <View
            style={{
                backgroundColor: Colors.SEMIWHITE_F9F9F9,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              height: getHeight(70),
              borderRadius: scale(10),
              
              //   width: getWidth(128),
            }}>
            <Image
              source={item.image4}
              style={{width: getWidth(44), height: getHeight(44)}}></Image>
          </View>

          <View
            style={{
              backgroundColor: Colors.WHITE,
              height: getHeight(25),
              width: getWidth(128),
              //  marginBottom: Spacing.S16,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{item.title4}</Text>
          </View>
        </View>
        {/* <View
          style={{
            backgroundColor: 'blue',
            height: getHeight(95),
            width: getWidth(128),
          }}></View> */}
      </View>
    </ViewRow>
  );
};

export default CategoriesTemp4Item;
