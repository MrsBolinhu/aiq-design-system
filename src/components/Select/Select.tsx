import React from 'react'
import PropTypes from 'prop-types'

import { Props as BoxProps } from '../Box'

import { SelectFetchable } from './SelectFetchable'
import { SelectStatic } from './SelectStatic'

export interface Props extends BoxProps {
  label?: string
  items?: Array<string | { id: any; name: any }>
  isOpen?: boolean
  variant?: 'outlined'
  prefix?: any
  placeholder?: string
  handleSelectedItemChange?: (item: any) => void
  onChangeTextInput?: (text: string) => void
  selectedItem?: any
  autoComplete?: boolean
  sufix?: any
  isLoading?: boolean
  errorMessage?: string
  errorForm?: boolean
  isFetchable?: boolean
  inputProps?: any
  defaultValue?: any
}

export const Select: React.FC<Props> = ({ isFetchable, ...props }) => {
  if (isFetchable) {
    return <SelectFetchable {...props} />
  }

  return <SelectStatic {...props} />
}

Select.propTypes = {
  isFetchable: PropTypes.bool
}
