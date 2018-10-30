import React from 'react'
import {storiesOf} from '@storybook/react'
import SimpleRating from './components/Rating/SimpleRating'

storiesOf('Rating', module)
  .add('default', () => <SimpleRating />)