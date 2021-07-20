import { FC, HTMLProps } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//import { Link, useLocation } from 'react-router-dom'

import './Overlay.less'

type OverlayProps = Pick<HTMLProps<HTMLDivElement>, 'hidden' | 'onClick'>

type LinkProps = { url: string; title: string }

export const LinkItem: FC<Partial<LinkProps>> = ({ url = '', title }) => (
  <Link href={url}>
    <a className={'routing-link'}>
       {title}
    </a>
 </Link>
)

const Overlay: FC<Partial<OverlayProps>> = props => {
  // const { pathname } = useLocation()
  const { pathname } = useRouter()

  return (
    <div className={`menu-overlay ${pathname.includes('/docs') ? 'getting-started' : ''}`} {...props}>
      {props.children}
    </div>
  )
}

export { Overlay }
