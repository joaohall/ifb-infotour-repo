import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SVGCameraInnerLines(props) {
  return (
    <Svg
      width={267}
      height={447}
      viewBox="0 0 267 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        filter="url(#filter0_d_547_422)"
        stroke="#fff"
        strokeWidth={5}
        strokeLinecap="round"
      >
        <Path d="M12 36.77v0C12 20.88 24.88 8 40.77 8H49M218 8h8.23C242.119 8 255 20.88 255 36.77v0M255 401.77v0c0 15.89-12.881 28.771-28.77 28.771H218M49 430.541h-8.23C24.88 430.541 12 417.66 12 401.77v0" />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SVGCameraInnerLines
