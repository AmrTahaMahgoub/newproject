import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"
const Filter = (props: SvgProps) => (
  <Svg  width={24} height={24} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#009d97" d="M0 0h18v18H0z" data-name="Rectangle 4549" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)" data-name="filter">
      <G data-name="settings (1)">
        <G data-name="Group 502">
          <G data-name="Group 501">
            <Path
              fill="#009d97"
              d="M17.25 14.235h-2a2.608 2.608 0 0 0-5.005 0H.75a.75.75 0 1 0 0 1.5h9.5a2.608 2.608 0 0 0 5.005 0h2a.75.75 0 1 0 0-1.5Zm-4.5 1.875a1.125 1.125 0 1 1 1.125-1.125 1.126 1.126 0 0 1-1.125 1.125Z"
              data-name="Path 168"
            />
          </G>
        </G>
        <G data-name="Group 504">
          <G data-name="Group 503">
            <Path
              fill="#009d97"
              d="M17.25 2.235h-2a2.608 2.608 0 0 0-5.006 0H.75a.75.75 0 1 0 0 1.5h9.5a2.608 2.608 0 0 0 5.006 0h2a.75.75 0 0 0 0-1.5Zm-4.5 1.875a1.125 1.125 0 1 1 1.125-1.125A1.126 1.126 0 0 1 12.75 4.11Z"
              data-name="Path 169"
            />
          </G>
        </G>
        <G data-name="Group 506">
          <G data-name="Group 505">
            <Path
              fill="#009d97"
              d="M17.25 8.235h-9.5a2.608 2.608 0 0 0-5.005 0h-2a.75.75 0 1 0 0 1.5h2a2.608 2.608 0 0 0 5.005 0h9.5a.75.75 0 0 0 0-1.5Zm-12 1.875a1.125 1.125 0 1 1 1.125-1.125A1.126 1.126 0 0 1 5.25 10.11Z"
              data-name="Path 170"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)
export default Filter
