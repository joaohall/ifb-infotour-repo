import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotificationIcon(props) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.75 9.333a6.88 6.88 0 00-2.123-4.95 7.383 7.383 0 00-5.127-2.05 7.383 7.383 0 00-5.127 2.05 6.88 6.88 0 00-2.123 4.95c0 8.167-3.625 10.5-3.625 10.5h21.75S21.75 17.5 21.75 9.333zM16.59 24.5a2.376 2.376 0 01-.884.851 2.484 2.484 0 01-2.412 0 2.377 2.377 0 01-.884-.851"
        stroke="#212121"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotificationIcon
