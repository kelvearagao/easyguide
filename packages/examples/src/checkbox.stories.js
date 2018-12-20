import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleCheckbox from './components/Checkbox/SimpleCheckbox'
import SelectedCheckbox from './components/Checkbox/SelectedCheckbox'

storiesOf('Checkbox', module)
  .add('default', () => <SimpleCheckbox />)
  .add('selected', () => <SelectedCheckbox />)
