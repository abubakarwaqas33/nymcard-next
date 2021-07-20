import { FC, SVGProps } from 'react'

const LogoIcon: FC<SVGProps<SVGSVGElement>> = ({ width = 140, height = 140 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect y='0.989502' width='140' height='140' rx='28.4375' fill='#2D365C' />
    <path
      d='M115.208 97.2011H97.7882L77.2007 71.8626L77.2018 97.2011H59.7805V45.0877H76.7862L97.349 71.8626L97.7882 44.9404H115.208V97.2011Z'
      fill='white'
    />
    <rect x='42.3599' y='79.781' width='17.4202' height='17.4202' fill='#92A1D9' />
    <rect x='59.7805' y='62.3608' width='17.4202' height='17.4202' fill='#ED6C68' />
    <rect x='24.9396' y='62.3608' width='17.4202' height='17.4202' fill='#415BBC' />
    <rect x='42.3599' y='44.9404' width='17.4202' height='17.4202' fill='#60C8D6' />
  </svg>
)

export { LogoIcon }
