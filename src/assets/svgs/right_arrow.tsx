import * as React from "react"
import Svg, { SvgProps, G, Rect } from "react-native-svg"
const RightArrow = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <G fill="#2e3441" transform="rotate(180 4.056 6.964)">
      <Rect
        width={1.476}
        height={9.797}
        data-name="Rectangle 16"
        rx={0.738}
        transform="rotate(-136.05 2.176 3.82)"
      />
      <Rect
        width={1.476}
        height={9.797}
        data-name="Rectangle 17"
        rx={0.738}
        transform="rotate(-46.4 8.367 3.586)"
      />
    </G>
  </Svg>
)
export default RightArrow
