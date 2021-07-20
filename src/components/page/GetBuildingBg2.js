import * as React from "react"

function SvgComponent2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="xMinYMin slice"
      viewBox="0 0 157 398"
      {...props}
    >
      <path
        stroke="#EE786C"
        strokeDasharray="5.31 5.31"
        strokeWidth={1.063}
        d="M432.214 29.607L17.63 262.688c-7.779 4.374-7.985 15.499-.374 20.158L488 570.999"
      />
      <path
        stroke="url(#prefix__getBuilding_2_0_linear)"
        strokeWidth={1.063}
        d="M461.436 588L69.87 343.072"
      />
      <path
        fill="url(#prefix__getBuilding_2_1_linear)"
        transform="matrix(0 -1 -1 0 197 450)"
        d="M0 0h450v149H0z"
      />
      <path
        fill="#DF6461"
        d="M63.548 346.204c3.052 1.762 8 1.762 11.05 0 1.414-.815 2.173-1.866 2.277-2.933.121-1.239.368-2.963-1.271-3.909-3.052-1.761-9.815-2.025-12.867-.263-2.415 1.917-2.24 5.343.81 7.105zm8.986-5.188c1.911 1.104 1.911 2.893 0 3.996-1.911 1.104-5.01 1.104-6.921 0-1.912-1.103-1.912-2.892 0-3.996 1.911-1.103 5.01-1.103 6.921 0z"
      />
      <path
        fill="url(#prefix__getBuilding_2_2_linear)"
        d="M63.549 344.672c3.051 1.762 8 1.762 11.05 0 3.052-1.762 3.052-4.618 0-6.38-3.05-1.761-7.999-1.761-11.05 0-3.052 1.762-3.052 4.618 0 6.38z"
      />
      <defs>
        <linearGradient
          id="prefix__getBuilding_2_0_linear"
          x1={393.137}
          x2={222.384}
          y1={554.929}
          y2={683.711}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EE786C" stopOpacity={0} />
          <stop offset={0.542} stopColor="#EE786C" />
          <stop offset={1} stopColor="#EE786C" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__getBuilding_2_1_linear"
          x1={225}
          x2={225}
          y1={0}
          y2={149}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__getBuilding_2_2_linear"
          x1={71.49}
          x2={61.089}
          y1={336.837}
          y2={343.837}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F48D89" />
          <stop offset={1} stopColor="#EE786C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgComponent2
