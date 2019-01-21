import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Checkbox from '../Checkbox'

describe('<Checkbox />', () => {
  const label = 'Tipo de rentabilidade'
  const items = [
    {value: 1, label: 'IPCA'},
    {value: 2, label: 'CDI'},
    {value: 3, label: 'PRÉ'},
  ]

  it('should render correctly', () => {
    const rtl = render(<Checkbox label={label} items={items} />)

    expect(rtl.getByText(label)).toBeInTheDocument()
    items.forEach(item => {
      expect(rtl.getByText(item.label)).toBeInTheDocument()
    })
  })
})
