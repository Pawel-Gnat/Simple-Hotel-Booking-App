import { useReducer, lazy, Suspense } from 'react'
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
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
import Search from './pages/Search/Search'
import NotFound from './pages/404/404'
import Login from './pages/Auth/Login'
import ErrorBoundary from './hoc/ErrorBoundary'
const Profile = lazy(() => import('./pages/Profile/Profile'))

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const header = (
		<Header>
			<InspiringQuote />
			<Searchbar />
			<ThemeButton />
		</Header>
	)
	const menu = <Menu />
	const content = (
		<div>
			<Suspense fallback={<p>Ładowanie...</p>}>
				<Routes>
					<Route path='/' end element={<Home />} />
					<Route path='/wyszukaj/:term?' element={<Search />} />
					<Route path='/hotele/:id' element={<Hotel />} />
					<Route path='/profil' element={state.isAuthenticated ? <Profile /> : <Navigate to='/zaloguj' />} />
					<Route path='/zaloguj' element={<Login />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</div>
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
						<ErrorBoundary>
							<Layout header={header} menu={menu} content={content} footer={footer} />
						</ErrorBoundary>
					</ReducerContext.Provider>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App
