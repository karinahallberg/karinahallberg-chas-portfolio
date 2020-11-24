import { render } from '@testing-library/react'
import Home from './Home'

describe('Home Tests', () => {
  test('Check Home renders', () => {
    render(<Home />)
  })
})
