import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Calender = (props: SvgProps) => (
  <Svg
   
    width={24}
    height={24}
    data-name="vuesax/linear/calendar"
    {...props}
  >
    <G
      fill="none"
      stroke="#8d8d8d"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
    >
      <Path d="M3.333.833v1.25" />
      <Path
        d="M6.667.833v1.25M1.458 3.787h7.083M8.75 3.541v3.542a1.869 1.869 0 0 1-2.083 2.083H3.333A1.869 1.869 0 0 1 1.25 7.083V3.541a1.869 1.869 0 0 1 2.083-2.083h3.334A1.869 1.869 0 0 1 8.75 3.541ZM6.54 5.708h0M6.54 6.958h0M4.999 5.708h0M4.999 6.958h0M3.456 5.708h0M3.456 6.958h0"
        data-name="Vector"
      />
    </G>
  </Svg>
)
export default Calender
