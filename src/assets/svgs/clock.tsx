import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Clock = (props: SvgProps) => (
  <Svg
   
    width={24}
    height={24}
    data-name="vuesax/linear/clock"
    {...props}
  >
    <G
      fill="none"
      stroke="#f9f9f9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M14.666 8A6.667 6.667 0 1 1 8 1.333 6.669 6.669 0 0 1 14.666 8Z" />
      <Path
        d="M10.473 10.12 8.406 8.887a1.476 1.476 0 0 1-.653-1.147V5.007"
        data-name="Vector"
      />
    </G>
  </Svg>
)
export default Clock
