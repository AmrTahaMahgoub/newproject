
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Check = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Path
      fill="#8d8d8d"
      d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm4.055 6.3-4.334 4.338a.666.666 0 0 1-.943 0L4.612 8.471a.667.667 0 0 1 .943-.943l1.7 1.7 3.862-3.862a.667.667 0 0 1 .943.943Zm0 0"
      data-name="check"
    />
  </Svg>
)
export default Check
