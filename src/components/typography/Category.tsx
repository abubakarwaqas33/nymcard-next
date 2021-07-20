import { FC } from 'react'
import { ParagraphProps } from './Paragraph'
import Text from './index'
import './Category.less'

export type CategoryProps = ParagraphProps
const defaultProps: CategoryProps = {
  font: 'secondary',
  uppercase: true,
  className: 'text-category',
  weight: 700,
  opacity: 1,
}
const Category: FC<CategoryProps> = props => <Text.Paragraph {...props} />

Category.defaultProps = defaultProps
export { Category }
