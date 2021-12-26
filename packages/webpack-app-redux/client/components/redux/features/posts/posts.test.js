// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  render,
  fireEvent,
  waitFor,
  screen,
  waitForElementToBeRemoved,
  queryByText,
} from '@components/redux/test-utils'
import '@testing-library/jest-dom'
import PostsList from './PostsList'

const server = setupServer(
  rest.get('/api/posts', (req, res, ctx) => {
    return res(
      ctx.json({
        code: 0,
        data: [
          { id: 1, name: 'A sample post' },
          { id: 3, name: 'A post about rtk query' },
        ],
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('handles server error', async () => {
  //这个放在后面就不会成功，因为有缓存
  server.use(
    rest.get('/api/posts', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<PostsList />)
  await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
  expect(screen.getByText('Missing post!')).toBeInTheDocument()
})
test('loads and displays greeting', async () => {
  render(<PostsList />)

  //   fireEvent.click(screen.getByText('refetch'))

  // await waitFor(() => screen.getByText('1'))
  await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
  //   await screen.findByText('refetch')
  expect(screen.getByText('1')).toHaveTextContent('1')
})
