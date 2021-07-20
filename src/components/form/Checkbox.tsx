import { Field } from 'formik'
import { FC, ReactNode } from 'react'
import { ReactComponent as CheckedIcon } from '../icon/images/checked-icon.svg'
import './Checkbox.less'

type CheckboxProps = {
  labelText: ReactNode
  name: string
  value: unknown
  error?: string
  touched?: boolean
}

const Checkbox: FC<CheckboxProps> = ({ labelText, name, value, error, touched }) => (
  <div className={`checkbox ${error && touched ? 'checkbox-error' : ''}`}>
    <div className='checkbox-inner'>
      <Field id={name} type='checkbox' name={name} className='checkbox-field' />
      {value && <CheckedIcon className='checkbox-icon' width='16px' height='14px' />}
    </div>
    <label htmlFor={name} className='checkbox-label'>
      {labelText}
    </label>
  </div>
)

export { Checkbox }
