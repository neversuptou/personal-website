import * as React from "react"
import { SVGProps } from "react"
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)">
      <path fill="#0000FF" d="M16.344 24.18a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M4.344.18h24v24h-24z" />
      </clipPath>
      <filter
        id="b"
        width={32}
        height={32}
        x={0.344}
        y={0.18}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_315_6" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_315_6"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default SvgCircle
