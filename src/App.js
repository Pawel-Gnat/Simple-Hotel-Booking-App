import { useCallback, useEffect, useReducer, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import { render } from '@testing-library/react'
import Searchbar from './components/UI/Searchbar/Searchbar'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import ThemeButton from './components/UI/ThemeButton/ThemeButton'
import ThemeContext from './context/themeContext'
import AuthContext from './context/authContext'
import ReducerContext from './context/reducerContext'
import InspiringQuote from './components/InspiringQuote/InspiringQuote'
import { reducer, initialState } from './reducer'
import Home from './pages/Home/Home'
import Hotel from './pages/Hotel/Hotel'

const backendHotels = [
	{
		id: 1,
		name: 'Pod akacjami',
		city: 'Warszawa',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non mattis augue. Donec id mauris scelerisque, scelerisque odio id, porttitor nunc.',
		image: '',
	},
	{
		id: 2,
		name: 'Dębowy',
		city: 'Lublin',
		rating: 8.8,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non mattis augue. Donec id mauris scelerisque, scelerisque odio id, porttitor nunc.',
		image: '',
	},
]

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const searchHandler = term => {
		const newHotels = [...backendHotels].filter(x => x.city.toLowerCase().includes(term.toLowerCase()))
		dispatch({ type: 'set-hotels', hotels: newHotels })
	}

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar onSearch={searchHandler} />
			<ThemeButton />
		</Header>
	)
	const menu = <Menu />
	const content = (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/hotele/:id' element={<Hotel />} />
		</Routes>
	)

	const footer = <Footer />

	return (
		<Router>
			<AuthContext.Provider
				value={{
					isAuthenticated: state.isAuthenticated,
					login: () => dispatch({ type: 'login' }),
					logout: () => dispatch({ type: 'logout' }),
				}}>
				<ThemeContext.Provider value={{ color: state.theme, changeTheme: () => dispatch({ type: 'change-theme' }) }}>
					<ReducerContext.Provider value={{ state: state, dispatch: dispatch }}>
						<Layout header={header} menu={menu} content={content} footer={footer} />
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App
