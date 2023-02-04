import { Component } from 'react'

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	}

	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className='alert alert-danger'>
					<p>Problem ze stroną</p>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
