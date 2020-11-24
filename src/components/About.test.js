import { render, screen } from '@testing-library/react'
import About from './About'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

describe('About Test h1 and specified button exists', () => {
  test('Check Twitter function is enabled', () => {
    const { getByText } = render(<About />)
    expect(getByText('Twitter'))
  })
})

test('Creating a snapshot', () => {
  const component = renderer.create(
    <a href='https://twitter.com/HallbergKarina'>Twitter</a>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders button link', () => {
  const { getByText, debug } = render(<About />)
  const linkElement = screen.getByText(/GitHub/i)
  expect(linkElement).toBeInTheDocument()
  debug()
})
