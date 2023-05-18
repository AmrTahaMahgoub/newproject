import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Star = (props: SvgProps) => (
  <Svg
    
    width={24}
    height={24}
    data-name="vuesax/linear/star"
    {...props}
  >
    <Path
      fill="none"
      stroke="#8d8d8d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.153 2.34 1.174 2.345a1.449 1.449 0 0 0 .947.7l2.127.353c1.36.227 1.68 1.213.7 2.187L12.447 9.58a1.448 1.448 0 0 0-.347 1.205l.473 2.047c.373 1.62-.487 2.247-1.92 1.4l-1.993-1.18a1.441 1.441 0 0 0-1.32 0l-1.993 1.18c-1.427.847-2.293.213-1.92-1.4l.473-2.047a1.447 1.447 0 0 0-.347-1.207L1.9 7.927c-.973-.973-.66-1.96.7-2.187l2.127-.355a1.452 1.452 0 0 0 .94-.7L6.84 2.34c.64-1.273 1.68-1.273 2.313 0Z"
    />
  </Svg>
)
export default Star
