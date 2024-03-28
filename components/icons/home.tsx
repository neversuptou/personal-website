import * as React from "react"
import { SVGProps } from "react"
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <defs>
    <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
        <stop offset="25%" stopColor="var(--color-one)" />
        <stop offset="50%" stopColor="var(--color-two)" />
        <stop offset="75%" stopColor="var(--color-three)" />
        <stop offset="100%" stopColor="var(--color-four)" />
      </linearGradient>
  </defs>
    <path
      fill="currentColor"
      d="m49.74 23.997-5.006-5-17.522-17.5a2.505 2.505 0 0 0-3.54 0l-17.52 17.5-5.007 5a2.498 2.498 0 0 0 1.779 4.237 2.505 2.505 0 0 0 1.76-.702l.734-.732v18.965c0 1.326.527 2.598 1.466 3.535a5.01 5.01 0 0 0 3.54 1.465h7.51a2.505 2.505 0 0 0 2.502-2.5v-10a2.498 2.498 0 0 1 2.503-2.5h5.006a2.504 2.504 0 0 1 2.503 2.5v10a2.498 2.498 0 0 0 2.504 2.5h7.509A5.01 5.01 0 0 0 44 49.3a4.997 4.997 0 0 0 1.466-3.535V26.8l.733.732a2.505 2.505 0 0 0 4.242-1.776 2.498 2.498 0 0 0-.702-1.759Z"
    />
  </svg>
)
export default SvgHome
