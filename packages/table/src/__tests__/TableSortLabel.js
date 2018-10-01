import React from 'react'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'
import { render, fireEvent } from 'react-testing-library'
import { createMatchers } from 'jest-emotion'
import * as emotion from 'emotion'
import TableSortLabel from '../TableSortLabel'

expect.extend(createMatchers(emotion))

const renderComponent = (props, children) => (
  render(
    <table>
      <thead>
        <tr>
          <TableSortLabel {...props}>
            {children}
          </TableSortLabel>
        </tr>
      </thead>
    </table>
  )
)

describe('<Table />', () => {
  it('should be rendered with arrow', () => {
    const { container, queryByText} = renderComponent({
      active: true,
      direction: 'asc'
    }, 'children')
    const img = container.querySelector('img[direction="asc"]')
    expect(container.querySelector('td')).toHaveStyleRule('color', '#322828')
    expect(queryByText('children')).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(container.querySelector('span')).not.toBeEmpty()
    expect(img).toHaveStyleRule('transform', 'rotate(180deg)')
  })
  it('should be rendered with arrow pointing down', () => {
    const { container } = renderComponent({
      active: true,
      direction: 'desc'
    }, 'children')
    const img = container.querySelector('img[direction="desc"]')
    expect(img).not.toHaveStyleRule('transform', 'rotate(180deg)')
  })
  it('should be rendered without arrow', () => {
    const { container } = renderComponent({
      active: false
    }, 'children')
    expect(container.querySelector('span')).toBeEmpty()
  })
  it('should trigger click', () => {
    const spy =  jest.fn()
    const { container } = renderComponent({
      active: false,
      onClick: spy
    }, 'children')
    fireEvent.click(container.querySelector('td'))
    expect(spy).toHaveBeenCalled()
  })
  it('should add class', () => {
    const { container } = renderComponent({
      active: false,
      className: 'className'
    }, 'children')
    expect(container.querySelector('td')).toHaveClass('className')
  })
})
