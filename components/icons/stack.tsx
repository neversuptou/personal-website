import * as React from "react"
import { SVGProps } from "react"
const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#a)">
      <path d="m49.47 34.508-3.374-1.906-18.542 10.475a5.209 5.209 0 0 1-5.123 0L3.89 32.6.515 34.506a1.041 1.041 0 0 0 0 1.817l23.958 13.542a1.042 1.042 0 0 0 1.025 0l23.958-13.542a1.041 1.041 0 0 0 0-1.817l.015.002Z" />
      <path d="m49.47 24.092-3.374-1.907L27.554 32.66a5.209 5.209 0 0 1-5.123 0L3.89 22.183.515 24.09a1.041 1.041 0 0 0 0 1.816l23.958 13.542a1.041 1.041 0 0 0 1.025 0l23.958-13.542a1.041 1.041 0 0 0 0-1.816l.015.002Z" />
      <path d="M49.471 13.675 25.513.133a1.063 1.063 0 0 0-1.025 0L.529 13.675a1.04 1.04 0 0 0 0 1.817l23.959 13.541a1.041 1.041 0 0 0 1.025 0L49.47 15.492a1.042 1.042 0 0 0 0-1.817Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgStack
