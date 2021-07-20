import { CSSProperties, FC, PropsWithChildren } from 'react'
import './index.less'
import { Category, CategoryProps } from './Category'
import { Link, LinkProps } from './Link'
import { Paragraph, ParagraphProps } from './Paragraph'
import { SubTitle, SubTitleProps } from './SubTitle'
import { Title, TitleProps } from './Title'

type Type = 'primary' | 'secondary' | 'tertiary'

export type TextProps = PropsWithChildren<
  Partial<{
    onClick: () => void
    uppercase: boolean
    style: CSSProperties
    size: 'sm' | 'md' | 'lg' | 'xl'
    color: Type | 'inverse' | 'disabled'
    font: Type
    weight: 400 | 500 | 600 | 700
    opacity: number
    className: string
    maxWidth: number
    align: 'left' | 'center' | 'right'
  }>
>

function withClassname<T>(Wrapped: FC<TextProps>): FC<T> {
  return (props: TextProps) => {
    const {
      color,
      size,
      uppercase,
      weight,
      font,
      className,
      opacity,
      maxWidth,
      align,
      children,
      style,
      ...baseProps
    } = props
    const classNames = [
      `text`,
      `text-font-${font ?? Wrapped?.defaultProps?.font ?? 'primary'}`,
      `text-color-${color ?? Wrapped?.defaultProps?.color ?? 'primary'}`,
      size ?? Wrapped?.defaultProps?.size ? `text-${size ?? Wrapped?.defaultProps?.size ?? 'md'}` : '',
      className ?? '',
    ]
    return (
      <Wrapped
        style={{
          ...style,
          fontWeight: style?.fontWeight ?? weight,
          opacity: style?.opacity ?? opacity,
          textTransform: style?.textTransform ?? uppercase ? 'uppercase' : undefined,
          maxWidth: maxWidth ? maxWidth : '',
          textAlign: style?.textAlign ?? align,
        }}
        className={className ?? ''.concat(classNames.join(' ')).trim()}
        {...baseProps}
      >
        {children}
      </Wrapped>
    )
  }
}

const Text = {
  Title: withClassname<Partial<TitleProps>>(Title),
  SubTitle: withClassname<Partial<SubTitleProps>>(SubTitle),
  Paragraph: withClassname<Partial<ParagraphProps>>(Paragraph),
  Category: withClassname<Partial<CategoryProps>>(Category),
  Link: withClassname<Partial<LinkProps>>(Link),
}
export { Text as default }
