import React from 'react'
import {action} from '@storybook/addon-actions'
import Checkbox from '@easyguide/checkbox/dist/Checkbox'

const items = [
  { value: 1, label: 'IPCA' },
  { value: 2, label: 'CDI', isActive: true },
  { value: 3, label: 'PRÉ' }
]

const SimpleCheckbox = () => (
  <Checkbox
    label="Tipo de rentabilidade"
    items={items}
    onChange={action('selected items')}
  />
)

export default SimpleCheckbox
