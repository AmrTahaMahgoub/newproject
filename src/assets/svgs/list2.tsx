import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const List2 = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Path
      fill="#505050"
      d="M7.4 3.5h9.35a.75.75 0 0 0 0-1.5H7.4a2.751 2.751 0 0 0-5.3 0H.75a.75.75 0 0 0 0 1.5H2.1a2.751 2.751 0 0 0 5.293 0Zm-3.9-.75A1.25 1.25 0 1 1 4.75 4 1.25 1.25 0 0 1 3.5 2.75Z"
    />
  </Svg>
)
export default List2
