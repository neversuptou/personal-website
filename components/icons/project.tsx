import * as React from "react"
import { SVGProps } from "react"
const SvgProject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFFF"
        d="M0 11.25c0-3.495 0-5.242.57-6.62A7.5 7.5 0 0 1 4.63.57C6.008 0 7.755 0 11.25 0s5.242 0 6.62.57a7.5 7.5 0 0 1 4.06 4.06c.57 1.378.57 3.125.57 6.62s0 5.242-.57 6.62a7.5 7.5 0 0 1-4.06 4.06c-1.378.57-3.125.57-6.62.57s-5.242 0-6.62-.57a7.5 7.5 0 0 1-4.06-4.06C0 16.492 0 14.745 0 11.25Zm28.07-6.62c-.57 1.378-.57 3.125-.57 6.62s0 5.242.57 6.62a7.5 7.5 0 0 0 4.06 4.06c1.377.57 3.125.57 6.62.57s5.242 0 6.62-.57a7.5 7.5 0 0 0 4.06-4.06c.57-1.378.57-3.125.57-6.62s0-5.242-.57-6.62A7.5 7.5 0 0 0 45.37.57C43.993 0 42.245 0 38.75 0s-5.242 0-6.62.57a7.5 7.5 0 0 0-4.06 4.06Zm0 27.5c-.57 1.377-.57 3.125-.57 6.62s0 5.242.57 6.62a7.5 7.5 0 0 0 4.06 4.06c1.377.57 3.125.57 6.62.57s5.242 0 6.62-.57a7.5 7.5 0 0 0 4.06-4.06c.57-1.377.57-3.125.57-6.62s0-5.242-.57-6.62a7.5 7.5 0 0 0-4.06-4.06c-1.377-.57-3.125-.57-6.62-.57s-5.242 0-6.62.57a7.5 7.5 0 0 0-4.06 4.06Zm-27.5 0C0 33.507 0 35.255 0 38.75s0 5.242.57 6.62a7.5 7.5 0 0 0 4.06 4.06c1.378.57 3.125.57 6.62.57s5.242 0 6.62-.57a7.5 7.5 0 0 0 4.06-4.06c.57-1.377.57-3.125.57-6.62s0-5.242-.57-6.62a7.5 7.5 0 0 0-4.06-4.06c-1.378-.57-3.125-.57-6.62-.57s-5.242 0-6.62.57a7.5 7.5 0 0 0-4.06 4.06Z"
      />
    </g>
  </svg>
)
export default SvgProject
