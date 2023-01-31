import { useState } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	onSearch: PropTypes.func.isRequired,
}

function Searchbar(props) {
	const [term, setTerm] = useState('')

	const search = () => {
		props.onSearch(term)
	}

	const updateTerm = e => {
		setTerm(e.target.value)
	}

	const onKeyDownHandler = e => {
		if (e.key === 'Enter') {
			search()
		}
	}

	return (
		<div className='d-flex'>
			<input
				onKeyDown={onKeyDownHandler}
				value={term}
				onChange={updateTerm}
				className='form-control'
				type='text'
				placeholder='Szukaj...'></input>
			<button onClick={search} className='ms-1 btn btn-secondary'>
				Szukaj
			</button>
		</div>
	)
}

Searchbar.propTypes = propTypes

export default Searchbar
