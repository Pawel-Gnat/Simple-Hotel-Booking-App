import Login from './Login'
import { fireEvent, render, screen } from '@testing-library/react'
import axios from '../../../axios-auth'

jest.mock('axios', () => {
	return {
		create: () => {
			return {
				post: jest.fn(() => Promise.resolve('')),
				get: jest.fn(() => Promise.resolve('')),
			}
		},
	}
})

test('renders Logowanie', () => {
	render(<Login />)
	expect(screen.getByText(/logowanie/i)).toBeInTheDocument()
})

test('changes email value', () => {
	const utils = render(<Login />)
	const emailInput = utils.getByLabelText('Email')
	fireEvent.change(emailInput, { target: { value: 'Paweł' } })
	expect(emailInput.value).toBe('Paweł')
})

test('show error on fail login', async () => {
	axios.post.mockImplementation(() => {
		Promise.reject({ response: { data: { error: { message: 'Złe dane' } } } })
	})

	const utils = render(<Login />)
	const submitButton = utils.getByText('Zaloguj')
	fireEvent.click(submitButton)

	await waitFor(() => {
		expect(axios.post).toHaveBeenCalledTimes(1)
	})

	expect(screen.getByText('Złe dane')).toBeInTheDocument()
})
