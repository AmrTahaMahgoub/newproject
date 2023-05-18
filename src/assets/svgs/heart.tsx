import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Heart = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Path
      fill="#009d97"
      d="M14.52 1.537c-2.294-2.979-6.81-1.221-6.81 1.8 0-3.025-4.516-4.783-6.811-1.8-2.372 3.08-.034 8.474 6.81 11.573 6.845-3.098 9.183-8.493 6.811-11.573Z"
    />
  </Svg>
)
export default Heart
