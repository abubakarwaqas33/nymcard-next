import React, { FC, ReactNode, useEffect } from 'react'
import { Form, Select } from 'formik-antd'
import './AntSelect.less'

type SelectProps = {
  size?: 'small' | 'regular' | 'large'
  name: string
  type?: 'text' | 'number'
  label: string
  error?: string
  touched?: boolean
  value?: ReactNode
  data?: {
    name: string
  }[]
  color?: 'dark' | 'light'
}

const AntSelect: FC<SelectProps> = ({ size = 'regular', name, label, data, color = 'light' }) => {
  useEffect(() => {
    const selectInner = document.querySelector(`.ant-select-inner-${name}`)

    selectInner?.addEventListener('click', () => {
      selectInner.classList.add('ant-select-inner-touched')
    })
  }, [name])

  return (
    <div
      className={`ant-select-inner ant-select-inner-${name} ant-select-inner-${size} ${color ? color : ''} ${
        size ? size : ''
      }`}
    >
      <Form.Item name={name} label={label} className={'contact-us-select-box'}>
        <Select name={name} className={`ant-select-${name}`}>
          {data?.map((item, index) => (
            <Select.Option key={index} value={item.name}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  )
}

export { AntSelect }
