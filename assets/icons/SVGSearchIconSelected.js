import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SearchIconSelected(props) {
  return (
    <Svg
      width={153}
      height={108}
      viewBox="0 0 153 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_861_166)">
        <Rect x={52} y={51} width={48} height={48} rx={15} fill="#AD53AB" />
      </G>
      <Path
        d="M74.833 83.167a9.333 9.333 0 100-18.667 9.333 9.333 0 000 18.667zM86.5 85.5l-5.075-5.075"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SearchIconSelected
