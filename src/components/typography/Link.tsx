import { FC } from 'react'
//import { Link as RouteLink } from 'react-router-dom'
const RouteLink =  require('next/link').default;
import { TextProps } from './index'
import './Link.less'

export type LinkProps = TextProps & {
  url: string
  target: string
}

const ILink: FC<Partial<LinkProps>> = ({ onClick, target = undefined, url = '', className, children, ...textProps }) => {
  return target !== '_blank' ? (
    <RouteLink onClick={onClick} href={url} {...textProps}>
      <a target={target} className={`text-link ${className}`} >
      {children}
      </a>
    </RouteLink>
  ) : (
    <a className={`text-link ${className}`} href={url} target={target}>
      {children}
    </a>
  )
}

ILink.defaultProps = {
  font: 'tertiary',
  color: 'primary',
  weight: 500,
  size: 'md',
  url: '',
}
export { ILink as Link }
