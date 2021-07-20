import { CSSProperties, FC, SVGProps } from 'react'
import './Icon.less'

export type IconProps = SVGProps<SVGSVGElement> & {
  shape: 'circle' | 'default-shape'
  size: 'sm' | 'md' | 'lg'
  color: 'primary' | 'secondary' | 'inverse' | 'ghost'
  type: 'default' | 'ghost'
  padding: number | string
  gap: number | string
  orderReversed: boolean
  style: CSSProperties
}

const Icon: FC<Partial<IconProps>> = ({
  color = 'ghost',
  shape = 'default-shape',
  width,
  height,
  size = 'md',
  padding = 8,
  gap,
  children,
  orderReversed = false,
  style,
}) => {
  const margin = orderReversed ? { marginLeft: gap } : { marginRight: gap }
  const order = orderReversed ? { order: 1 } : { order: 0 }
  return (
    <div
      className={`icon icon-${shape} icon-${size} icon-${color}`}
      style={{ ...style, width, height, padding, ...margin, ...order }}
    >
      {children}
    </div>
  )
}

export { Icon }
