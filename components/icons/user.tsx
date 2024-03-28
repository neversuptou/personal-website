import * as React from "react"
import { SVGProps } from "react"
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 42.818A12.817 12.817 0 0 1 12.818 30h14.365A12.817 12.817 0 0 1 40 42.818c0 2.92-1.975 5.457-4.858 5.932C31.537 49.35 26.188 50 20 50c-6.188 0-11.537-.65-15.143-1.25C1.978 48.275 0 45.737 0 42.818ZM7.5 12.5a12.5 12.5 0 1 1 25 0 12.5 12.5 0 0 1-25 0Z"
    />
  </svg>
)
export default SvgUser
