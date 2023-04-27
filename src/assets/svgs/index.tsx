import React from 'react';
import ArrowBack from './ArrowBackIcon';
import { SvgProps } from 'react-native-svg';
import AreaIcon from './AreaIcon';
import ArrowForward from './ArrowForward';


export type IconsName =
  "ArrowBack" |
  "AreaIcon"|
  "ArrowForward"

export type RotateTypes = 'left' | 'right' | 'top' | 'bottom';
export interface IconsProps {
  color?: string;
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
    case 'ArrowBack':
      return <ArrowBack {...props} style={[props.rotate && style, props.style]} />;
      case 'AreaIcon':
        return <AreaIcon {...props} style={[props.rotate && style, props.style]} />;
        case 'ArrowForward':
          return <ArrowForward {...props} style={[props.rotate && style, props.style]} />;

    default:
      return null;
  }
};
export default Svgs;
