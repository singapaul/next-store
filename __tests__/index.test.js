import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/pages'
 
describe('Home', () => {
  it('renders a page with a text component', () => {
    render(<Page />)
 
    const heading = screen.getByText('Home')
 
    expect(heading).toBeInTheDocument()
  })
})