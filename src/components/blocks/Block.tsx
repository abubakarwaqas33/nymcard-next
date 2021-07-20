import { CSSProperties, FC, Fragment, ReactNode } from 'react'
import { SectionEntity } from '../../models/section'
import './Block.less'

// export type BlockData = {
//   data: Pick<SectionEntity, 'id' | 'title' | 'subtitle' | 'description' | 'button'>
// }

export type BlockData = {
 data: SectionEntity
}

type BlockProps = {
  id: string
  title: ReactNode
  text: ReactNode
  subtitle: ReactNode
  button: ReactNode
  type: 'hero' | 'primary' | 'secondary' | 'tertiary'
  style: CSSProperties
  className: string
}

export const Block: FC<any> = ({ id, style, title, text, subtitle, button, type, className }) => {
  return (
    <div key={id} style={style} className={`block ${type ?? ''} ${className ? className : ''}`.trim()}>
      {subtitle ?? <Fragment key={'category'}>{subtitle}</Fragment>}
      <Fragment key={'title'}>{title}</Fragment>
      <div key={'text'} className='block-text-wrapper'>
        {text}
      </div>
      <Fragment key={'button'}>{button}</Fragment>
    </div>
  )
}
