import { FC } from 'react'
import { TextProps } from './index'
import './Paragraph.less'

export type ParagraphProps = TextProps
const defaultProps: ParagraphProps = {
  font: 'primary',
  color: 'primary',
  size: 'md',
  weight: 400,
}
const Paragraph: FC<ParagraphProps> = ({ className, children, ...baseProps }) => (
  <p className={`text-paragraph ${className}`} {...baseProps}>
    {children}
  </p>
)

Paragraph.defaultProps = defaultProps
export { Paragraph }
