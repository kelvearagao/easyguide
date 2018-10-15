import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleSelect from './components/Select/SimpleSelect'
import SearchSelect from './components/Select/SearchSelect'

storiesOf('Select', module)
  .add('default', () => <SimpleSelect />)
  .add('search select', () => <SearchSelect />)