import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const AiIcon = (props: SvgProps) => (
  <Svg
    width={30}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.333 3.5h-3.5A2.333 2.333 0 0 0 3.5 5.833v3.5m21 0v-3.5A2.333 2.333 0 0 0 22.167 3.5h-3.5m0 21h3.5a2.333 2.333 0 0 0 2.333-2.333v-3.5m-21 0v3.5A2.333 2.333 0 0 0 5.833 24.5h3.5"
      stroke="#000000"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default AiIcon
