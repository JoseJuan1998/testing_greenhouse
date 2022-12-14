import { cleanup, logRoles, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';
import Skills from './components/Skills';

describe('App', () => {
  afterEach(cleanup)

  it('render', () => {
    render(<App />)
  })

  it('renders heading inputs', () => {
    render(<App />)

    const textH1 = screen.getByText(/Mundo/)

    const textH2 = screen.getByRole('heading', {
      level: 2
    })

    expect(textH1).toHaveTextContent('Hola Mundo')
    expect(textH2).toBeInTheDocument()
  })
})