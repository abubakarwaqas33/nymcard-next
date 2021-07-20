import React, { FC, ReactNode, useEffect } from 'react'
import { Field, ErrorMessage } from 'formik'
import './Input.less'

type InputProps = {
  size?: 'regular' | 'small'
  name: string
  type?: 'text' | 'number'
  label: string
  error?: string
  touched?: boolean
  value?: ReactNode
}

const Input: FC<InputProps> = ({ size = 'regular', name, type = 'text', label, error, touched }) => {
  useEffect(() => {
    const labelTag = document.querySelector(`.label-${name}`)
    const inputTag: HTMLInputElement | null = document.querySelector(`input[name=${name}]`)

    inputTag?.addEventListener('focus', () => {
      labelTag?.classList.add('label-touched')
    })

    inputTag?.addEventListener('blur', () => {
      if (!inputTag?.value) {
        labelTag?.classList.remove('label-touched')
      }

      if (inputTag?.value) {
        inputTag.classList.add('inputfield-filled')
      }
    })
  })

  return (
    <div className={`input input-${size} ${error && touched ? 'input-error' : ''}`}>
      <label htmlFor={name} className={`label label-${name}`}>
        {label}
      </label>
      <Field id={name} className={`inputfield `} type={type} name={name} />
      <ErrorMessage name={name} component='div' className='error-message' />
    </div>
  )
}

export { Input }
