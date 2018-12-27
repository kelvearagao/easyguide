import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Ratio from '../Ratio'

describe('<Ratio/>', () => {
  const CONSTANTS = {
    yep: 'Sim',
    nope: 'Não',
    active: 'active',
    inactive: 'inactive',
  }

  const list = [
    {id: 1, name: CONSTANTS.yep, status: CONSTANTS.inactive},
    {id: 2, name: CONSTANTS.nope, status: CONSTANTS.active},
  ]

  it('should render correctly', () => {
    const rtl = render(<Ratio listItems={list} />)

    expect(rtl.getByText(CONSTANTS.yep)).toBeInTheDocument()
    expect(rtl.getByText(CONSTANTS.nope)).toBeInTheDocument()
  })

  it('should trigger callback with the correct clicked item id', () => {
    const handleClick = jest.fn()
    const rtl = render(
      <Ratio listItems={list} getActiveElement={handleClick} />,
    )

    fireEvent.click(rtl.getByText(CONSTANTS.yep))
    expect(handleClick).toHaveBeenCalledWith(1)
  })
})
