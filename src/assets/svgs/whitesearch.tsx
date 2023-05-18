import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const WhiteSearch = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Path
      fill="#fff"
      d="M10.964 12.024a6.75 6.75 0 1 1 1.061-1.061l5.156 5.156a.75.75 0 0 1-1.061 1.061Zm-7.926-1.562a5.25 5.25 0 1 1 7.429 0 5.25 5.25 0 0 1-7.429 0Z"
    />
  </Svg>
)
export default WhiteSearch 
