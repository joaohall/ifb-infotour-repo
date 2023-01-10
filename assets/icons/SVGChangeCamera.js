import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SVGChangeCamera(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    
      <Path
        d="M1.406 4.02C2.49 3.252 3.484 2.25 4.85 2.057a4 4 0 11-3.216 5.29"
        stroke="#252525"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.406 1.02v3h3"
        stroke="#252525"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SVGChangeCamera
