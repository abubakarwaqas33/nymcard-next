import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="xMinYMin slice"
      viewBox="0 0 181 422"
      {...props}
    >
      <path
        stroke="#EE786C"
        strokeDasharray="5 5"
        d="M-215.5-104.5l390.162 219.351c7.321 4.116 7.515 14.586.352 18.97L-268 405"
      />
      <path
        stroke="url(#prefix__canFindSecondaryPaint0_linear)"
        d="M-243 421l368.5-230.5"
      />
      <path
        fill="#DF6461"
        d="M131.45 193.448c-2.872 1.657-7.528 1.657-10.4 0-1.33-.768-2.044-1.756-2.142-2.761-.115-1.166-.346-2.788 1.196-3.678 2.872-1.658 9.237-1.906 12.109-.248 2.273 1.804 2.109 5.029-.763 6.687zm-8.457-4.883c-1.799 1.039-1.799 2.722 0 3.761 1.799 1.038 4.715 1.038 6.514 0 1.798-1.039 1.798-2.722 0-3.761-1.799-1.038-4.715-1.038-6.514 0z"
      />
      <path
        fill="url(#prefix__canFindSecondaryPaint1_linear)"
        d="M131.45 192.006c-2.872 1.658-7.528 1.658-10.4 0-2.872-1.658-2.872-4.346 0-6.004 2.872-1.658 7.528-1.658 10.4 0 2.872 1.658 2.872 4.346 0 6.004z"
      />
      <defs>
        <linearGradient
          id="prefix__canFindSecondaryPaint0_linear"
          x1={-178.725}
          x2={-18.03}
          y1={389.877}
          y2={511.073}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE786C" stopOpacity={0} />
          <stop offset={0.542} stopColor="#EE786C" />
          <stop offset={1} stopColor="#EE786C" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__canFindSecondaryPaint1_linear"
          x1={123.976}
          x2={133.765}
          y1={184.632}
          y2={191.22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F48D89" />
          <stop offset={1} stopColor="#EE786C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgComponent
