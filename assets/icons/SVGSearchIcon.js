import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.833 22.167a9.333 9.333 0 1 0 0-18.667 9.333 9.333 0 0 0 0 18.667ZM24.5 24.5l-5.075-5.075"
      stroke="#212121"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default SearchIcon
