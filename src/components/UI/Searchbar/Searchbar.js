import { useContext, useEffect, useState, useRef } from 'react'
import ThemeContext from '../../../context/themeContext'
import { useNavigate } from 'react-router-dom'

function Searchbar(props) {
	const [term, setTerm] = useState('')
	const theme = useContext(ThemeContext)
	const history = useNavigate()

	const inputRef = useRef()

	const search = () => {
		history(`wyszukaj/${term}`)
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

export default Searchbar
