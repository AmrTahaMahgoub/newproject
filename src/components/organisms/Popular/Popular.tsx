import React from 'react';
import {Image} from '../../atoms/Image/Image';
import {CategoriesDataType, PopularTemp3DataType} from '../../../redux/api/api';
import {View} from 'react-native';
import Text from '../../atoms/Text/Text';
import {getHeight, getWidth, scale} from '../../../styles/dimensions';
import {Colors, Spacing} from '../../../styles';
import {Line, ViewRow} from '../../atoms';
import {TextWithIcon} from '../../molecules';
import Svgs from '../../../assets/svgs';

const PopularItem = ({item}: {item: PopularTemp3DataType}) => {
  return (
    <ViewRow
      style={{
        justifyContent: 'flex-start',
        height: getHeight(133),
        width: getWidth(343),
        // backgroundColor: 'gray',
        marginVertical: getHeight(12),
        borderRadius:scale(8),
        borderWidth:1 ,
        borderColor:Colors.GRAY_00000029

      }}>
      <Image
        source={item.image}
        style={{width: getWidth(104), height: getHeight(133)}}></Image>
      <View
        style={{
          flexDirection: 'column',

          margin: scale(7),

          alignItems: 'flex-start',
        }}>
        <ViewRow
          style={{justifyContent: 'space-between', width: getHeight(240)}}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{flex:1}}>{item.title}</Text>
          <Text fontSize='FS11' fontFamily='MEDIUMROBOTO' style={{flex:0.5}}>{item.duration}</Text>
        </ViewRow>
        <Text
          fontFamily="REGULARROBOTO"
          fontSize="FS10"
          style={{
            textAlign: 'left',
          }}>
          {item.subtitle}
        </Text>
        <ViewRow
          style={{
            width: getWidth(150),
            // backgroundColor: 'yellow',
            justifyContent: 'space-between',
          }}>
          <TextWithIcon
            text={item.comments}
            icon="Comment"
            size={'small'}
            fontsize={'FS8'}
          />
          <TextWithIcon
            text={item.likes}
            icon="Like"
            size={'small'}
            fontsize={'FS8'}
          />
        </ViewRow>

        <Line />
        <TextWithIcon
          text={item.date}
          icon="Calender"
          size={'small'}
          fontsize={'FS8'}
        />
        <TextWithIcon
          text={item.location}
          icon="Location"
          size={'small'}
          fontsize={'FS8'}
        />
        {/* <ViewRow>
          <Svgs name="Calender" stroke={"white"} ></Svgs>
          <Text fontFamily="REGULARLATO" fontSize="FS8" color='SEMIWHITE_F9F9F9'>
            {item.date}
          </Text>
        </ViewRow> */}
        {/* <ViewRow>
          <Svgs name="Location" stroke={"white"}></Svgs>
          <Text fontFamily="REGULARLATO" fontSize="FS8" color='SEMIWHITE_F9F9F9'>
            {item.location}
          </Text>
        </ViewRow> */}
      </View>
    </ViewRow>
  );
};

export default PopularItem;
