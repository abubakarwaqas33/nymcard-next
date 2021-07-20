import { FC, ReactElement } from 'react'
// import { Link, LinkProps } from 'react-router-dom'
import Link from 'next/link'
import './MainButton.less'

type MainButtonProps = {
  text: string
  type: 'default' | 'ghost' | 'circle' | 'ghost-dark'
  block?: boolean
  disabled?: boolean
  icon?: ReactElement
  path?: string
  onClick: any
  size?: 'small' | 'medium' | 'large'
  orderReversed?: boolean
  dark?: boolean
}

const MainButton: FC<MainButtonProps> = ({
  text,
  type,
  icon,
  path,
  onClick,
  disabled = false,
  orderReversed = false,
  block,
  size = 'medium',
  dark = false,
}) => {
  return (
    <Link href={`${path ? path : ''}`}>
      <a 
      className={`main-button ${disabled ? 'disabled' : ''} ${dark ? 'dark' : ''} ${size} ${type}`}
      onClick={e => (onClick ? onClick(e) : null)}
      style={{ display: block ? 'block' : undefined }}
      >
      <div className={`main-button-wrapper ${orderReversed ? 'reversed' : ''}`}>
        {type === 'circle' && <div className={`main-button-${type}`}>{icon && type === 'circle' && icon}</div>}
        <span className='main-button-text'>{text}</span>
        {icon && type !== 'circle' ? icon : null}
      </div>
      </a>
    </Link>
  )
}

export { MainButton }
