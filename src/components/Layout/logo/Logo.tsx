import { FC, SVGProps } from 'react'
import { LogoIcon } from './LogoIcon'
import { LogoText } from './LogoText'

export type LogoProps = Pick<SVGProps<SVGSVGElement>, 'width' | 'height' | 'color'> & {
  type: 'icon' | 'text'
}
const Logo: FC<Partial<LogoProps>> = ({ type = 'text', ...svgProps }) => {
  const LogoSvg = type === 'icon' ? LogoIcon : LogoText
  return <LogoSvg {...svgProps} />
}
export { Logo }
