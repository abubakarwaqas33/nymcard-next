import { FC, ReactNode } from 'react'
import Text from '../../components/typography'
import './Card.less'

type CardProps = {
  icon: any
  title: string
  description: string
  type: 'ghost' | 'light' | 'dark' | 'numeric' | 'gradient'
  size: 'small' | 'medium' | 'large'
  numericTitle: string
  maxWidth: number
  className: string
}

const Card: FC<Partial<CardProps>> = ({
  icon,
  title,
  description = '',
  type = 'ghost',
  size,
  numericTitle,
  maxWidth,
  className,
}) => (
  <div
    className={`card card-${type} ${className ? className : ''} ${size ? `card-${size}` : ''}`}
    style={{ maxWidth: maxWidth ? maxWidth : 'unset' }}
  >
    {icon ? icon : null}
    {numericTitle ? (
      <div className='numeric-title-wrapper'>
        <Text.Paragraph font='secondary' size={'md'} color='secondary'>
          {numericTitle}
        </Text.Paragraph>
      </div>
    ) : null}
    <Text.Title level={size === 'large' ? 4 : 5}>
      {title}
      {title?.includes('Partnered with') && <span className={'visa-logo'} />}
    </Text.Title>
    <div className='card-text-wrapper'>
      <Text.Paragraph size={'md'}>
        {description?.split('\n').map(chumk => (
          <>
            {chumk}
            <br />
          </>
        ))}
      </Text.Paragraph>
    </div>
  </div>
)

export { Card }
