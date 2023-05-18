import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const List1 = (props: SvgProps) => (
  <Svg  width={24} height={10} {...props}>
    <Path
      fill="#505050"
      d="M10.1 3.5H.75a.75.75 0 0 1 0-1.5h9.35a2.751 2.751 0 0 1 5.3 0h1.35a.75.75 0 0 1 0 1.5H15.4a2.751 2.751 0 0 1-5.293 0Zm1.4-.75A1.25 1.25 0 1 1 12.75 4a1.25 1.25 0 0 1-1.25-1.25Z"
    />
  </Svg>
)
export default List1
