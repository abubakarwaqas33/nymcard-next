import { MenuItem, Select, SelectProps } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { ReactComponent as ArrowDropDownIcon } from '../../assets/icons/select-arrow.svg'
import countryList from './countries.json'

const CountrySelect: FC<SelectProps> = props => {
  const [country, setCountry] = useState('')

  return (
    <Select
      required
      onChange={event => setCountry(() => `${event.target.value}`)}
      IconComponent={ArrowDropDownIcon}
      labelId='country-select-label'
      value={country}
      id='demo-simple-select'
      {...props}
    >
      {countryList.map(({ name, code }) => (
        <MenuItem key={code} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}

export { CountrySelect }
