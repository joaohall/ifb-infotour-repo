import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SVGpictureButton(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={30}
        cy={30}
        r={28}
        stroke="#AD53AB"
        strokeOpacity={0.8}
        strokeWidth={4}
      />
      <Circle cx={30} cy={30} r={22.5} fill="#AD53AB" stroke="#AD53AB" />
    </Svg>
  )
}

export default SVGpictureButton
