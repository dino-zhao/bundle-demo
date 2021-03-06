// __tests__/fetch.test.js
import React from 'react'
import { server, rest } from 'jest-setup'
import {
  render,
  screen,
  waitForElementToBeRemoved,
  userEven,
  fireEvent,
} from '@components/redux/test-utils'
import PostsList from './PostsList'
import { getByRole, waitFor } from '@testing-library/dom'

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
  server.use(
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
  render(<PostsList />)

  await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
  screen.debug()
  expect(screen.getByText('1')).toHaveTextContent('1')
})

test('测试refetch', async () => {
  let id = 3
  server.use(
    rest.get('/api/posts', (req, res, ctx) => {
      return res(
        ctx.json({
          code: 0,
          data: [
            { id: 1, name: 'A sample post' },
            { id: id++, name: 'A post about rtk query' },
          ],
        })
      )
    })
  )
  const { getByRole } = render(<PostsList />)
  await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
  screen.debug()
  //   let btn = screen.getByTestId('toRefetch')
  fireEvent.click(getByRole(/refetch/))
  screen.debug()
  //下面两种方式等待
  //1.使用动态data-test
  await waitForElementToBeRemoved(() => screen.getByTestId('refetching'))
  //使用expect+jest-dom
  await waitFor(() =>
    expect(getByRole(/refetch/)).not.toHaveClass('ant-btn-loading')
  )

  screen.debug()
  expect(1).toBe(1)
})
