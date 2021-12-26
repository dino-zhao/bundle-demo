import { store } from './app/store'
import { Provider } from 'react-redux'
import { render, queries } from '@testing-library/react'
const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
