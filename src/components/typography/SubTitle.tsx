import React, { FC } from 'react'
import Text from './index'
import { TitleProps } from './Title'

export type SubTitleProps = TitleProps

const SubTitle: FC<Partial<SubTitleProps>> = ({ children, className, ...baseProps }) => (
  <Text.Title className={`text-subtitle ${className}`} {...baseProps}>
    {children}
  </Text.Title>
)

SubTitle.defaultProps = {
  font: 'secondary',
  color: 'primary',
  level: 3,
  weight: 700,
  className: 'text-subtitle',
}
export { SubTitle }
