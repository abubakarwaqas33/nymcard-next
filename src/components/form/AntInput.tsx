import React, { FC, ReactNode, useState } from 'react'
import { Form, Input } from 'formik-antd'
import './AntInput.less'

type InputProps = {
  size?: 'small' | 'regular' | 'large'
  name: string
  type?: 'text' | 'number'
  label: string
  error?: string
  touched?: boolean
  value?: ReactNode
  color?: 'dark' | 'light'
}

const AntInput: FC<InputProps> = ({ size = 'regular', name, type = 'text', label, color = 'dark' }) => {
  const [activeInput, setActiveInput] = useState(false)

  return (
    <div className={`ant-input-inner ${size ? size : ''} ${activeInput ? 'active' : ''} ${color ? color : ''}`}>
      <Form.Item name={name} label={label} className={'contact-us-input-box'}>
        <Input
          type={type}
          name={name}
          onFocus={() => setActiveInput(true)}
          onBlur={e => {
            !e.target.value && setActiveInput(false)
          }}
        />
      </Form.Item>
    </div>
  )
}

export { AntInput }
