import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vitest } from 'vitest'
import user from '@testing-library/user-event'
import Skills from '.'

const skills = [
  'programming',
  'learning',
  'swimming'
]

describe('Skills', () => {
  afterEach(cleanup)

  it('render correctly', () => {
    render(<Skills />)
  })

  it('render heading Empty with no props', () => {
    render(<Skills />)

    const emptyText = screen.getByRole('heading')

    expect(emptyText).toBeInTheDocument()
    expect(emptyText).toHaveTextContent('Empty')
  })

  it('render a list of skills', () => {
    render(<Skills skills={skills} />)

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
  })

  it('render many elements in the list', () => {
    render(<Skills skills={skills} />)

    const elements = screen.getAllByRole('listitem')

    expect(elements).toHaveLength(skills.length)
  })

  it('render button Login when no logged', () => {
    render(<Skills skills={skills} />)

    const loginButton = screen.getByRole('button', { name: /login/i })
    const learnButton = screen.queryByRole('button', { name: /start/i })

    const error = () => {
      screen.getByRole('button', { name: /start/i })
    }

    expect(loginButton).toBeInTheDocument()
    expect(learnButton).not.toBeInTheDocument()
    expect(error).toThrow(Error)
  })

  it('render button Start Learning', async () => {
    render(<Skills skills={skills} />)

    const learnButton = await screen.findByRole('button', { name: /start/i }, { timeout: 2000 })

    expect(learnButton).toBeInTheDocument()
  })

  it('render button Start Learning whe user clicks button Login', async () => {
    render(<Skills skills={skills} />)

    const loginButton = screen.getByText(/login/i)

    await user.click(loginButton)

    const learningButton = screen.getByText(/start/i)

    expect(learningButton).toBeInTheDocument()
  })

  it('receives a function as prop', async () => {
    const incrementHandler = vitest.fn()

    render(<Skills skills={skills} incrementHandler={incrementHandler} />)

    const button = screen.getByRole('button', { name: /increment/i })

    await user.click(button)

    expect(incrementHandler).toBeCalled()
  })
})