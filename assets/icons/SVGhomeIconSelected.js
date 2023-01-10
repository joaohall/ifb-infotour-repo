import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

function HomeIconSelected(props) {
  return (
    <Svg
      width={154}
      height={66}
      viewBox="0 0 154 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_852_152)">
        <Rect x={53} y={9} width={48} height={48} rx={15} fill="#AD53AB" />
      </G>
      <Path
        d="M65.75 29.875L77 21.417l11.25 8.458v13.292c0 .64-.263 1.255-.732 1.709a2.545 2.545 0 01-1.768.707h-17.5a2.545 2.545 0 01-1.768-.707 2.377 2.377 0 01-.732-1.71v-13.29z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
  )
}


export default HomeIconSelected

