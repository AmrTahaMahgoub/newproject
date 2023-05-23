import * as React from "react"
import Svg, { Defs, ClipPath, Path, G, SvgProps } from "react-native-svg"
const Search = (props:SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color||"#505050"} d="M0 0h18v18H0z" data-name="Rectangle 188" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)" data-name="seaech">
      <Path
        fill={props.color||"#505050"}
        d="m17.288 16.4-4.286-4.46a7.264 7.264 0 1 0-5.562 2.6 7.19 7.19 0 0 0 4.164-1.315l4.317 4.489a.948.948 0 1 0 1.367-1.314ZM7.439 1.9a5.372 5.372 0 1 1-5.371 5.367A5.378 5.378 0 0 1 7.439 1.9Z"
      />
    </G>
  </Svg>
)
export default Search