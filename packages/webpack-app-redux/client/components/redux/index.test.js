import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ReduxComponent from '.'

test('properly increments and decrements the counter', () => {
  const { getByText } = render(<ReduxComponent />)
  const counter = getByText('post列表')

  expect(counter.textContent).toEqual('post列表')
})
