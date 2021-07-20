import { Button as Wrapped } from 'antd'

import { FC } from 'react'
import './Button.less'

const AntButton: FC<typeof Wrapped.defaultProps> = Wrapped

export { AntButton }
