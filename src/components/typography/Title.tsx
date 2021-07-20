import { createElement, FC } from 'react'
import { TextProps } from './index'
import './Title.less'

export type TitleProps = TextProps & {
  level: 1 | 2 | 3 | 4 | 5
  weight: 400 | 500 | 600 | 700
}
const defaultProps: TitleProps = {
  level: 1,
  font: 'secondary',
  color: 'primary',
  className: 'text-title',
  weight: 700,
}
const Title: FC<Partial<TitleProps>> = ({ children, className, level, ...baseProps }) => {
  return createElement(
    `h${level}`,
    {
      className: `text-title ${className}`,
      ...baseProps,
    },
    children,
  )
}
Title.defaultProps = defaultProps

export { Title }
