import React from 'react'
import {action} from '@storybook/addon-actions'
import Checkbox from '@easyguide/checkbox/dist/Checkbox'

const items = [
  { value: 1, label: 'IPCA' },
  { value: 2, label: 'CDI' },
  { value: 3, label: 'PRÉ' },
]

const SelectedCheckbox = () => (
  <Checkbox
    label="Tipo de rentabilidade"
    items={items}
    value={[1, 3]}
    onChange={action('selected items')}
  />
)

export default SelectedCheckbox
