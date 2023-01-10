import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AiIconSelected(props) {
  return (
    <Svg
      width={154}
      height={66}
      viewBox="0 0 154 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_861_164)">
        <Rect x={53} y={8} width={48} height={48} rx={15} fill="#AD53AB" />
      </G>
      <Path
        d="M72.333 21.5h-3.5a2.333 2.333 0 00-2.333 2.333v3.5m21 0v-3.5a2.333 2.333 0 00-2.333-2.333h-3.5m0 21h3.5a2.333 2.333 0 002.333-2.333v-3.5m-21 0v3.5a2.333 2.333 0 002.333 2.333h3.5"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default AiIconSelected
