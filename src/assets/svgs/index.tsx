import React from 'react';

import { SvgProps } from 'react-native-svg';

import Search from './seaech';
import Listalignleft from './align-left';
import Bell from './bell (1)';
import SmallSearch from './smallsearch';
import WhiteSearch from './whitesearch';
import List1 from './list1';
import List2 from './list2';
import Comment from './comment';
import Like from './like';
import Calender from './calendar';
import Location from './location';
import RightArrow from './right_arrow';
import Clock from './clock';
import Call from './call';
import Star from './star';
import Check from './check';
import Notification from './notification';
import Filter from './filter';
import Heart from './heart';


export type IconsName =

  "Search" |
  "Listalignleft" |
  "Bell" |
  "SmallSearch" |
  "WhiteSearch" |
  "List1" |
  "List2" |
  "Comment" |
  "Like" |
  "Calender" |
  "Location" |
  "RightArrow" |
  "Clock" |
  "Call" |
  "Star" |
  "Check" |
  "Notification" |
  "Filter" |
  "Heart"
  

export type RotateTypes = 'left' | 'right' | 'top' | 'bottom';
export interface IconsProps {
  iconcolor?: string;
  width?: number;
  height?: number;
  name?: IconsName;
  rotate?: RotateTypes;
  type?: "image" | "svg"
}



const getRotate = (rotate: string) => {
  switch (rotate) {
    case "top":
      return '90deg'
    case "bottom":
      return '270deg'
    case "left":
      return '0deg'
    case "right":
      return '-180deg'
    default:
      return "0deg"
  }
}

function Svgs(props: IconsProps & SvgProps) {
  const style = { transform: [{ rotate: getRotate(props.rotate || "") }] }
  switch (props.name) {

    case 'Search':
      return <Search {...props} style={[props.rotate && style, props.style]} />;
    case 'Listalignleft':
      return <Listalignleft {...props} style={[props.rotate && style, props.style]} />;
    case 'Bell':
      return <Bell {...props} style={[props.rotate && style, props.style]} />;
    case 'SmallSearch':
      return <SmallSearch {...props} style={[props.rotate && style, props.style]} />;
    case 'WhiteSearch':
      return <WhiteSearch {...props} style={[props.rotate && style, props.style]} />;
    case 'List1':
      return <List1 {...props} style={[props.rotate && style, props.style]} />;
    case 'List2':
      return <List2 {...props} style={[props.rotate && style, props.style]} />;
    case 'Comment':
      return <Comment {...props} style={[props.rotate && style, props.style]} />;
    case 'Like':
      return <Like {...props} style={[props.rotate && style, props.style]} />;
    case 'Calender':
      return <Calender {...props} style={[props.rotate && style, props.style]} />;
    case 'Location':
      return <Location {...props} style={[props.rotate && style, props.style]} />;
    case 'RightArrow':
      return <RightArrow {...props} style={[props.rotate && style, props.style]} />;
    case 'Clock':
      return <Clock {...props} style={[props.rotate && style, props.style]} />;
    case 'Call':
      return <Call {...props} style={[props.rotate && style, props.style]} />;
    case 'Star':
      return <Star {...props} style={[props.rotate && style, props.style]} />;
    case 'Check':
      return <Check {...props} style={[props.rotate && style, props.style]} />;
    case 'Notification':
      return <Notification {...props} style={[props.rotate && style, props.style]} />;
    case 'Filter':
      return <Filter {...props} style={[props.rotate && style, props.style]} />;
    case 'Heart':
      return <Heart {...props} style={[props.rotate && style, props.style]} />;


    default:
      return null;
  }
};
export default Svgs;
