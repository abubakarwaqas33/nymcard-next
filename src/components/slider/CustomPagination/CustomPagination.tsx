import { FC } from 'react'
import './CustomPagination.less'

type CustomPaginationProps = {
  type: 'default' | 'inversed'
  className: string
}

const CustomPagination: FC<Partial<CustomPaginationProps>> = ({ type = 'default', className }) => (
  <div className={`custom-pagination custom-pagination-${type} ${className}`} />
)

export { CustomPagination }
