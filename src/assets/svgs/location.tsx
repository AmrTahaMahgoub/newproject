
import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Location = (props: SvgProps) => (
  <Svg
 
    width={14}
    height={14}
    data-name="vuesax/linear/location"
    {...props}
  >
    <G fill="none" stroke={props.color||"#8d8d8d"} strokeWidth={1} {...props}>
      <Path d="M6.493 4.419A1.492 1.492 0 1 1 5 2.927a1.492 1.492 0 0 1 1.493 1.492Z" />
      <Path
        d="M2.192 3.683a2.836 2.836 0 0 1 5.616 0 5.232 5.232 0 0 1-1.597 4.518 1.61 1.61 0 0 1-2.416 0 5.248 5.248 0 0 1-1.603-4.518Z"
        data-name="Vector"
      />
    </G>
  </Svg>
)
export default Location
