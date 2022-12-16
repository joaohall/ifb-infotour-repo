import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={30}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.75 10.875 15 2.417l11.25 8.458v13.292c0 .64-.263 1.255-.732 1.709a2.545 2.545 0 0 1-1.768.707H6.25a2.544 2.544 0 0 1-1.768-.707 2.377 2.377 0 0 1-.732-1.71v-13.29Z"
      stroke="#000000"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default HomeIcon
