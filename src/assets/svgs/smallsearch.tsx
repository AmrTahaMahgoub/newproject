import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SmallSearch = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <G data-name="Group 12">
      <Path
        fill="#bcbcbc"
        d="M11.118 10.765a6.331 6.331 0 1 0-.861.783l4.761 4.769a.573.573 0 0 0 .406.174.557.557 0 0 0 .406-.174.59.59 0 0 0 0-.822ZM1.161 6.413a5.252 5.252 0 1 1 5.252 5.252 5.257 5.257 0 0 1-5.252-5.252Z"
        data-name="Path 10"
      />
    </G>
  </Svg>
)
export default SmallSearch
