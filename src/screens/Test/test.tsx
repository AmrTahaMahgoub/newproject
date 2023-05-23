import { SectionList, Text, View, Image, ImageSourcePropType, ScrollView } from 'react-native';
import { images } from '../../assets/imgs';
import { Spacing } from '../../styles';
import React from 'react';


export type Section = {
  image: ImageSourcePropType;
  id: string;
  text: string;
};

export const DATA: Section[] = [
  {id: '1', image: images.jaredd, text: 'Graduation'},
  {id: '2', image: images.pexels, text: 'E-learning'},
  {id: '3', image: images.jaredd, text: 'Best Books'},
  {id: '4', image: images.owned, text: 'Corona'},
  {id: '5', image: images.jaredd, text: 'Dr.Robot'},
  {id: '6', image: images.owned, text: 'Graduation'},
];

type SectionProps = {
  section: {
    title: string;
    data: Section[];
  };
};

const EducationAndHealthItem = ({ item }: { item: Section }) => {
  return (
  <ScrollView scrollEnabled={true}>
      <View style={{backgroundColor:"gray", marginRight: Spacing.S8 }}>
      <Image source={item.image} />
      <Text>{item.text}</Text>
    </View>
  </ScrollView>
  );
};


const RenderSection = ({ section }: SectionProps) => {
  return (
    <View style={{backgroundColor:"red"}}><Text>{section.title}</Text></View>
    )}

const Test = () => {
  const sections = [
    { title: 'Education', data: DATA },
    { title: 'Health', data: DATA },
  ];

  return (
    <SectionList
    
    //scrollEnabled={false}
   // renderSectionHeader={RenderSection}
//stickySectionHeadersEnabled={true}
horizontal={true}
      sections={sections}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => <EducationAndHealthItem item={item} />}
      renderSectionHeader={RenderSection}
    />
  );
};

export default Test;