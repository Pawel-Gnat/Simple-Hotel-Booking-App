import { useContext, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../../context/themeContext'

const propTypes = {
	onSearch: PropTypes.func.isRequired,
}

function Searchbar(props) {
	const [term, setTerm] = useState('')
	const theme = useContext(ThemeContext)

	const inputRef = useRef()

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

	const focusInput = () => {
		inputRef.current.focus()
	}

	useEffect(() => {
		focusInput()
	}, [])

	return (
		<div className='d-flex'>
			<input
				ref={inputRef}
				onKeyDown={onKeyDownHandler}
				value={term}
				onChange={updateTerm}
				className='form-control'
				type='text'
				placeholder='Szukaj...'></input>
			<button onClick={search} className={`ms-1 btn btn-${theme.color}`}>
				Szukaj
			</button>
		</div>
	)
}

Searchbar.propTypes = propTypes

export default Searchbar
